import StudentService from '../services/students.service.js';

class StudentController {
    async uploadExcel(req, res) {
        try {
            if (!req.file) return res.status(400).json({ message: "Excel file is required" });
            
            const result = await StudentService.importFromExcel(req.file.buffer);
            return res.status(200).json({
                message: "Bulk import completed",
                count: result.length
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async show(req, res) {
        try {
            const student = await StudentService.getStudentProfile(req.params.lrn);
            return res.status(200).json(student);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const students = await StudentService.getAllStudents();
            return res.status(200).json({
                status: "success",
                data: students
            });
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default new StudentController();