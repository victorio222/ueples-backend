import express from "express";
import harvestController from "../controllers/harvest.controller.js";

const harvestRouter = express.Router();

harvestRouter.post("/add", harvestController.createHarvest);
harvestRouter.get("/", harvestController.getAllHarvests);
harvestRouter.get("/:id", harvestController.getHarvestById);
harvestRouter.get("/transplant/:transplant_id", harvestController.getHarvestByTransplant);
harvestRouter.put("/update/:id", harvestController.updateHarvest);
harvestRouter.delete("/delete/:id", harvestController.deleteHarvest);

export default harvestRouter;
