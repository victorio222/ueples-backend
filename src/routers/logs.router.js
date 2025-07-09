import express from "express";
import logsController from "../controllers/logs.controller.js";

const logRouter = express.Router();

logRouter.post("/", logsController.createLog);
logRouter.get("/", logsController.getAllLogs);
logRouter.get("/filter", logsController.getLogsByFilter);
logRouter.get("/user/:user_id", logsController.getLogsByUser);

export default logRouter;