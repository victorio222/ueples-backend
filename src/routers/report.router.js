import express from "express";
import reportController from "../controllers/report.controller.js";
import upload from "../middleware/multer.middleware.js";

const reportRouter = express.Router();

reportRouter.post("/add", upload.fields([{ name: 'file_location', maxCount: 1 }]), reportController.createReport);
reportRouter.get("/", reportController.getAllReports);
reportRouter.get("/:id", reportController.getReportById);
reportRouter.delete("/delete/:id", reportController.deleteReport);

export default reportRouter;