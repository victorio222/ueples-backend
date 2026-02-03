import express from "express";
import proposalFilesController from "../controllers/proposalFiles.controller.js";

const router = express.Router();

router.get("/", proposalFilesController.getAllFiles);
router.get("/:id", proposalFilesController.getFileById);
router.post("/", proposalFilesController.createFile);
router.put("/:id", proposalFilesController.updateFile);
router.delete("/:id", proposalFilesController.deleteFile);

export default router;