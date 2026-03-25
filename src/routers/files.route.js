import express from "express";
import multer from "multer";
import upload from '../middleware/multer.middleware.js';
import folderController from "../controllers/subfolder.controller.js";
import DocumentController from '../controllers/documents.controller.js';
import authMiddleware from "../middleware/auth.middleware.js";

const fileRoutes = express.Router();


fileRoutes.get("/files", authMiddleware.authToken, folderController.getAllFiles);
fileRoutes.get("/files/:folder_id", authMiddleware.authToken, folderController.getByFolderId);
fileRoutes.patch("/files/update/:id", authMiddleware.authToken, folderController.renameFile);

export default fileRoutes;