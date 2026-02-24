import db from '../models/index.js';

class AcademicYearRepository {
    // Used by Service to check for duplicates
    async findByLabel(label) {
        return await db.AcademicYear.findOne({
            where: { academic_year: label } 
        });
    }

    async getAllYears() {
        return await db.AcademicYear.findAll({
            order: [['academic_year', 'DESC']]
        });
    }

    async getActiveYear() {
        return await db.AcademicYear.findOne({
            where: { is_active: true }
        });
    }

    async createYear(label) {
        // Ensure the key matches your Model (academic_year)
        return await db.AcademicYear.create({ academic_year: label });
    }

    async findOrCreate(label) {
    return await db.AcademicYear.findOrCreate({
        where: { academic_year: label },
        defaults: { 
            academic_year: label,
            // is_active: false // Default value for new records
        }
    });
}
}

export default new AcademicYearRepository();