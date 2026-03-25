// import AcademicYearRepository from '../repositories/academicYear.repository.js';

// class AcademicYearService {
//     async createNewYear(label) {
//         if (!/^\d{4}-\d{4}$/.test(label)) {
//             throw new Error("Invalid format. Use YYYY-YYYY (e.g., 2025-2026)");
//         }

//         // Instead of throwing an error, you can return the existing one
//         const [year, created] = await AcademicYearRepository.findOrCreate(label);

//         if (!created) {
//             // You can still throw an error, or just return the record with a custom status
//             throw new Error("This academic year already exists.");
//         }

//         return year;
//     }

//     async getYearList() {
//         return await AcademicYearRepository.getAllYears();
//     }
// }

// export default new AcademicYearService();













import AcademicYearRepository from '../repositories/academicYear.repository.js';

class AcademicYearService {
    // Helper to get the standard Academic Year string based on current date
    // Logic: If month is before June, we are in the second half of the previous year's batch
    getCurrentAcademicYearLabel() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth(); // 0-indexed (5 is June)

        // Assuming school year starts in June
        if (currentMonth < 5) {
            return `${currentYear - 1}-${currentYear}`;
        } else {
            return `${currentYear}-${currentYear + 1}`;
        }
    }

    async getYearList() {
        const currentLabel = this.getCurrentAcademicYearLabel();

        // Auto-create/ensure current year exists
        await AcademicYearRepository.findOrCreate(currentLabel);

        // Return the full list (which now definitely includes the current year)
        return await AcademicYearRepository.getAllYears();
    }

    async getImportedBatches(doctypeId) {
        const batches = await AcademicYearRepository.getImportedBatchesByDocType(doctypeId);
        return batches;
    }

    async createNewYear(label) {
        if (!/^\d{4}-\d{4}$/.test(label)) {
            throw new Error("Invalid format. Use YYYY-YYYY (e.g., 2025-2026)");
        }

        const [year, created] = await AcademicYearRepository.findOrCreate(label);
        if (!created) throw new Error("This academic year already exists.");
        
        return year;
    }
}

export default new AcademicYearService();