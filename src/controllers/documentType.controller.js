import AcademicYearService from '../services/academicYear.service.js';
import documentTypeService from '../services/documentType.service.js';

class DocumentTypeController {
    async store(req, res) {
        try {
            const name = await documentTypeService.add(req.body.name);
            return res.status(201).json(name);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async index(req, res) {
        try {
            const names = await documentTypeService.findAll();
            // Wrap in status and data
            return res.status(200).json({
                status: 'success',
                data: names 
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default new DocumentTypeController();