import db from '../models/index.js';

class DocumentItemRepository {
    async findAll() {
        return await db.SubFolderItem.findAll({
            include: [
                {
                    model: db.User,
                    as: 'posted_by',
                    // Maps database 'first_name' to JSON 'name'
                    attributes: [['first_name', 'name']]
                }
            ],
            order: [['createdAt', 'DESC']]
        });
    }

    async findByFolderId(folder_id) {
        return await db.SubFolderItem.findAll({
            where: {
                folder_id
            }, 
            include: [
                {
                    model: db.User,
                    as: 'posted_by',
                    // Maps database 'first_name' to JSON 'name'
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

    async createDocument(data) {
        return await db.SubFolderItem.create(data);
    }

    async deleteDocument(id) {
        return await db.Documents.destroy({ where: { document_id: id } });
    }

    async deleteFile(id) {
        return await db.SubFolderItem.destroy({ where: { file_id: id } });
    }

    async fetchPaged(page = 1, limit = 10, lrn = null) {
        const offset = (page - 1) * limit;

        return await db.Documents.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
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

export default new DocumentItemRepository();