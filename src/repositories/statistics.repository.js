import db from '../models/index.js';
import { Op, fn, col } from 'sequelize';

class StatisticsRepository {
    async getGlobalStats() {
        // Parallel counting for better performance
        const [totalUsers, totalUploads, totalStudents] = await Promise.all([
            db.User.count(),
            db.Documents.count(),
            db.Students.count()
        ]);

        return { totalUsers, totalUploads, totalStudents };
    }

    async getUploadStatsByYear(selectedYear) {
        // 1. Calculate the 10-year sliding window based on the selected year
        const [endYear] = selectedYear.split("-").map(Number);
        const rangeLabels = Array.from({ length: 10 }, (_, i) => {
            const start = (endYear - 9) + i;
            return `${start}-${start + 1}`;
        });

        // 2. Query Documents joined with AcademicYear
        const results = await db.Documents.findAll({
            attributes: [
                // Count documents per group
                [fn('COUNT', col('Documents.document_id')), 'count']
            ],
            include: [{
                model: db.AcademicYear,
                as: 'academicYear',
                // Based on your DocumentRepository, the column name is 'academic_year'
                attributes: [['academic_year', 'ayLabel']], 
                where: {
                    academic_year: { [Op.in]: rangeLabels }
                }
            }],
            // Group by the ID and the Label from the joined table
            group: ['academicYear.year_id', 'academicYear.academic_year'],
            order: [[col('academicYear.academic_year'), 'ASC']],
            raw: true
        });

        // 3. Flatten the Sequelize response for Recharts
        // Sequelize raw joins return keys like 'academicYear.ayLabel'
        return results.map(row => ({
            ayLabel: row['academicYear.ayLabel'],
            count: parseInt(row.count, 10)
        }));
    }
}

export default new StatisticsRepository();