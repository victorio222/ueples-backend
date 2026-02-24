import db from '../models/index.js';

class StudentRepository {
    async findAll() {
        return db.Students.findAll();
    }

    async findByLrn(lrn) {
        return await db.Students.findOne({ where: { lrn } });
    }

    async bulkInsert(studentsArray) {
        // Use a transaction for safety
        return await db.sequelize.transaction(async (t) => {
            return await db.Students.bulkCreate(studentsArray, { 
                transaction: t,
                ignoreDuplicates: true 
            });
        });
    }

    async getStudentStats() {
        // Example of a raw count for a dashboard
        return await db.Students.count();
    }
}

export default new StudentRepository();