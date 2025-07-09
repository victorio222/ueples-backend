import express from "express";
import transplantController from "../controllers/transplant.controller.js";

const transplantRouter = express.Router();

transplantRouter.post("/add", transplantController.createTransplant);
transplantRouter.get("/", transplantController.getAllTransplants);
transplantRouter.get("/:id", transplantController.getTransplantById);
transplantRouter.put("/update/:id", transplantController.updateTransplant);
transplantRouter.delete("/delete/:id", transplantController.deleteTransplant);

export default transplantRouter;
