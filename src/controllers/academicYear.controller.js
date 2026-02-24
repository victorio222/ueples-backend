import AcademicYearService from '../services/academicYear.service.js';

class AcademicYearController {
    async store(req, res) {
        try {
            const year = await AcademicYearService.createNewYear(req.body.academic_year);
            return res.status(201).json(year);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async index(req, res) {
        try {
            const years = await AcademicYearService.getYearList();
            // Wrap in status and data
            return res.status(200).json({
                status: 'success',
                data: years 
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    // async index(req, res) {
    //     try {
    //         const years = await AcademicYearService.getYearList();
    //         return res.status(200).json(years);
    //     } catch (error) {
    //         return res.status(500).json({ message: error.message });
    //     }
    // }
}

export default new AcademicYearController();