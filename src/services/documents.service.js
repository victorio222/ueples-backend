import DocumentRepository from '../repositories/document.repository.js';
import DocumentItemRepository from '../repositories/subfolderitem.repository.js';
import StudentRepository from '../repositories/students.repository.js';

class DocumentService {
    async uploadStudentDocument(fileData, bodyData, userId) {
        // 1. Ensure student exists
        const student = await StudentRepository.findByLrn(bodyData.lrn);
        if (!student) throw new Error(`Student with LRN ${bodyData.lrn} not found.`);

        // 2. DUPLICATE CHECK: Does this student already have this document type for this year?
        const existingDoc = await DocumentRepository.findDuplicate(
            student.student_id,
            bodyData.year_id,
            bodyData.type
        );

        if (existingDoc) {
            // Option A: Throw error
            throw new Error(`A ${bodyData.type} has already been uploaded for this student in the selected year.`);

            // Option B: Overwrite (You'd need to delete the physical old file first)
            // await fs.promises.unlink(existingDoc.attachment); 
            // await DocumentRepository.deleteDocument(existingDoc.document_id);
        }

        // 3. Format and Save
        const documentPayload = {
            student_id: student.student_id,
            year_id: bodyData.year_id,
            posted_by: userId,
            type: bodyData.type,
            attachment: fileData.path,
        };

        return await DocumentRepository.createDocument(documentPayload);
    }

    async getArchiveData() {
        return await DocumentRepository.getAllDocuments();
    }

    async getArchiveByYear(yearId) {
        const academic_year = await DocumentRepository.getDocumentsByYear(yearId);

        if (!academic_year || !academic_year.length === 0) {
            // throw new Error("Academic Year not found.")
            return [];
        }

        return academic_year;
    }

    // main and sub folders
    async uploadDocument(fileData, bodyData, userId) {
        // 3. Format and Save
        const documentPayload = {
            name: bodyData.name,
            folder_id: bodyData.folder_id,
            uploaded_by: userId,
            type: bodyData.type,
            file_attachment: fileData.path,
        };

        return await DocumentItemRepository.createDocument(documentPayload);
    }

    async findAll() {
        return await DocumentItemRepository.findAll();
    }
}

export default new DocumentService();