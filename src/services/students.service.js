import StudentRepository from '../repositories/students.repository.js';
import xlsx from 'xlsx';

class StudentService {
    async importFromExcel(fileBuffer) {
        // 1. Parse Excel from Buffer (no need to save file to disk)
        const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rawData = xlsx.utils.sheet_to_json(sheet);

        // 2. Map and Clean Data
        const formattedData = rawData.map(item => ({
            lrn: String(item.LRN || item.lrn),
            first_name: item.FirstName || item.first_name,
            last_name: item.LastName || item.last_name,
            gender: item.Gender || item.gender,
            middle_name: item.MiddleName || null
        }));

        // 3. Bulk Insert via Repository
        return await StudentRepository.bulkInsert(formattedData);
    }

    async getStudentProfile(lrn) {
        const student = await StudentRepository.findByLrn(lrn);
        if (!student) throw new Error("Student record not found");
        return student;
    }

    async getAllStudents() {
        const students = await StudentRepository.findAll();
        return students;
    }
}

export default new StudentService();