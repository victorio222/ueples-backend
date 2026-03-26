import fs from 'fs'
import DocumentService from '../services/documents.service.js';
import documentRepository from '../repositories/document.repository.js';

const activeLocks = new Map();
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

            if (req.body.lrn) {
                activeLocks.delete(req.body.lrn.toString());
            }

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

    async handleLock(req, res) {
        try {
            const { lrn } = req.params;
            const userId = req.user.user_id;
            const userName = `${req.user.first_name || 'User'} ${req.user.last_name || ''}`;
            const now = Date.now();

            console.log(req.user.first_name);

            const existingLock = activeLocks.get(lrn);

            // 1. Check if a valid lock exists and belongs to someone else
            if (existingLock && existingLock.expiresAt > now && existingLock.userId !== userId) {
                return res.status(200).json({
                    isLocked: true,
                    isOwner: false,
                    lockedBy: existingLock.userName,
                });
            }

            // 2. Create or Refresh the lock (expires in 60 seconds)
            const newLock = {
                userId,
                userName: userName.trim(),
                expiresAt: now + 60000, 
            };
            activeLocks.set(lrn, newLock);

            return res.status(200).json({
                isLocked: true,
                isOwner: true,
                lockedBy: newLock.userName,
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async handleReleaseLock(req, res) {
        try {
            const { lrn } = req.params;
            const userId = req.user.user_id;

            const lock = activeLocks.get(lrn);
            // Only the owner can release the lock
            if (lock && lock.userId === userId) {
                activeLocks.delete(lrn);
            }
            
            return res.status(200).json({ message: "Lock released" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default new DocumentController();