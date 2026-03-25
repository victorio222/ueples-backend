import express from "express";
import multer from "multer";
import upload from '../middleware/multer.middleware.js';
import folderController from "../controllers/subfolder.controller.js";
import DocumentController from '../controllers/documents.controller.js';
import authMiddleware from "../middleware/auth.middleware.js";

const folderRoutes = express.Router();

folderRoutes.get("/tree/:doctype_id", authMiddleware.authToken, folderController.getTree);
folderRoutes.post("/main", authMiddleware.authToken, folderController.createMainFolder);
folderRoutes.post("/sub", authMiddleware.authToken, folderController.createSubFolder);
folderRoutes.get("/root/:doctype_id", authMiddleware.authToken, folderController.getRootFolders);
folderRoutes.get("/sub/:parent_id", authMiddleware.authToken, folderController.getSubFolders);
folderRoutes.patch("/update/:id", authMiddleware.authToken, folderController.renameFolder);
folderRoutes.delete("/delete/:id", authMiddleware.authToken, folderController.deleteFolder);
folderRoutes.post('/upload', authMiddleware.authToken, (req, res, next) => {
    upload.single('file_attachment')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: "File is too large. Max limit is 5MB." });
            }
            return res.status(400).json({ message: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }
        next();
    });
}, DocumentController.uploadDocument);

export default folderRoutes;