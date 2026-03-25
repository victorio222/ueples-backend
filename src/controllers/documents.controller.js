import fs from 'fs'
import DocumentService from '../services/documents.service.js';
import documentRepository from '../repositories/document.repository.js';

class DocumentController {
    async handleUpload(req, res) {
        try {
            // Guard clause: Check if user exists
            if (!req.user || !req.user.user_id) {
                return res.status(401).json({
                    message: "Unauthorized: No user information found in request."
                });
            }

            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const newDoc = await DocumentService.uploadStudentDocument(
                req.file,
                req.body,
                req.user.user_id
            );

            return res.status(201).json({
                message: "Document archived successfully",
                data: newDoc
            });
        } catch (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ message: error.message });
        }
    }

    async fetchAll(req, res) {
        try {
            const { page = 1, limit = 10, lrn } = req.query;

            const result = await documentRepository.fetchPaged(page, limit, lrn);

            res.status(200).json({
                totalItems: result.count,
                totalPages: Math.ceil(result.count / limit),
                currentPage: parseInt(page),
                documents: result.rows
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    async fetchByAcademicYear(req, res) {
        try {
            const { acad_year } = req.params;
            const document = await DocumentService.getArchiveByYear(acad_year);
            return res.status(200).json(document);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // main and sub folders
    async uploadDocument(req, res) {
        try {
            // Guard clause: Check if user exists
            if (!req.user || !req.user.user_id) {
                return res.status(401).json({
                    message: "Unauthorized: No user information found in request."
                });
            }

            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const newDoc = await DocumentService.uploadDocument(
                req.file,
                req.body,
                req.user.user_id
            );

            return res.status(201).json({
                message: "Document uploaded successfully!",
                data: newDoc
            });
        } catch (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ message: error.message });
        }
    }
}

export default new DocumentController();