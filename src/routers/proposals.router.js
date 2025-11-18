import express from "express";
import proposalController from "../controllers/proposals.controller.js";

const router = express.Router();

router.get("/", proposalController.getAllProposals);
router.get("/:id", proposalController.getProposalById);
router.post("/", proposalController.createProposal);
router.put("/:id", proposalController.updateProposal);
router.delete("/:id", proposalController.deleteProposal);

export default router;