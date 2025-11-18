import express from "express";
import revisionController from "../controllers/revision.controller.js";

const router = express.Router();

router.get("/", revisionController.getAllRevisions);
router.get("/:id", revisionController.getRevisionById);
router.post("/", revisionController.createRevision);
router.put("/:id", revisionController.updateRevision);
router.delete("/:id", revisionController.deleteRevision);

export default router;