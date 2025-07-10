import express from "express";
import plantStageController from "../controllers/plantStage.controller.js";

const stageRouter = express.Router();

stageRouter.post("/add", plantStageController.addStage);
stageRouter.put("/update/:id", plantStageController.updateStage);
stageRouter.get("/", plantStageController.getAllStages);
stageRouter.get("/active", plantStageController.getActiveStages);
stageRouter.get("/:id", plantStageController.getStageById);
stageRouter.delete("/delete/:id", plantStageController.deleteStage);

export default stageRouter;
