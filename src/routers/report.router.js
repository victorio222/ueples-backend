import express from "express";
import reportController from "../controllers/report.controller.js";

const reportRouter = express.Router();

reportRouter.post("/add", reportController.createReport);
reportRouter.get("/", reportController.getAllReports);
reportRouter.get("/:id", reportController.getReportById);
reportRouter.delete("/delete/:id", reportController.deleteReport);

export default reportRouter;