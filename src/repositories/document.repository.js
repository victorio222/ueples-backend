import db from '../models/index.js';

class DocumentRepository {
    async getAllDocuments() {
        return await db.Documents.findAll({
            include: [
                {
                    model: db.Students,
                    as: 'student',
                    attributes: ['first_name', 'last_name', 'lrn']
                },
                {
                    model: db.AcademicYear,
                    as: 'academicYear',
                    // Maps database 'academic_year' to JSON 'label'
                    attributes: [['academic_year', 'label']]
                },
                {
                    model: db.User,
                    as: 'uploader',
                    // Maps database 'first_name' to JSON 'name'
                    attributes: [['first_name', 'name']]
                }
            ],
            order: [['createdAt', 'DESC']]
        });
    }

    async getDocumentsByYear(yearId) {
        return await db.Documents.findAll({
            include: [
                {
                    model: db.Students,
                    as: 'student',
                    attributes: ['first_name', 'last_name', 'lrn']
                },
                {
                    model: db.AcademicYear,
                    as: 'academicYear',
                    attributes: [['academic_year', 'label']],
                    where: { academic_year: yearId },
                },
                {
                    model: db.User,
                    as: 'uploader',
                    attributes: [['first_name', 'name']]
                }
            ],
            order: [['createdAt', 'DESC']]
        });
    }

    async findDuplicate(studentId, yearId, type) {
        return await db.Documents.findOne({
            where: {
                student_id: studentId,
                year_id: yearId,
                type: type
            }
        });
    }

    async findByStudent(studentId) {
        return await db.Documents.findAll({
            where: { student_id: studentId },
            include: [{ model: db.AcademicYear, as: 'academicYear' }]
        });
    }

    async createDocument(data) {
        return await db.Documents.create(data);
    }

    async deleteDocument(id) {
        return await db.Documents.destroy({ where: { document_id: id } });
    }

    async fetchPaged(page = 1, limit = 10, lrn = null) {
        const offset = (page - 1) * limit;

        // Build the student filter if LRN is provided
        const studentWhere = lrn ? { lrn: lrn } : {};

        return await db.Documents.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model: db.Students,
                    as: 'student',
                    attributes: ['first_name', 'last_name', 'lrn'],
                    where: studentWhere, // <--- This is the missing piece!
                    required: !!lrn      // Ensures only docs with this student are returned
                },
                {
                    model: db.AcademicYear,
                    as: 'academicYear',
                    attributes: [['academic_year', 'label']]
                },
                {
                    model: db.User,
                    as: 'uploader',
                    attributes: [['first_name', 'name']]
                }
            ],
            order: [['createdAt', 'DESC']]
        });
    }

    // async fetchPaged(page = 1, limit = 10) {
    //     const offset = (page - 1) * limit;

    //     return await db.Documents.findAndCountAll({
    //         limit: parseInt(limit),
    //         offset: parseInt(offset),
    //         include: [
    //             {
    //                 model: db.Students,
    //                 as: 'student',
    //                 attributes: ['first_name', 'last_name', 'lrn']
    //             },
    //             {
    //                 model: db.AcademicYear,
    //                 as: 'academicYear',
    //                 attributes: [['academic_year', 'label']]
    //             },
    //             {
    //                 model: db.User,
    //                 as: 'uploader', // Join the user table
    //                 attributes: [['first_name', 'name']] // Alias first_name to name
    //             }
    //         ],
    //         order: [['createdAt', 'DESC']]
    //     });
    // }
}

export default new DocumentRepository();