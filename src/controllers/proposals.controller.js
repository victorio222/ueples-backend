import ProposalService from "../services/proposals.service.js";

const getAllProposals = async (req, res) => {
    try {
        const data = await ProposalService.getAllProposals();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProposalById = async (req, res) => {
    try {
        const data = await ProposalService.getProposalById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const createProposal = async (req, res) => {
    try {
        const created = await ProposalService.createProposal(req.body);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateProposal = async (req, res) => {
    try {
        const updated = await ProposalService.updateProposal(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteProposal = async (req, res) => {
    try {
        await ProposalService.deleteProposal(req.params.id);
        res.json({ message: "Proposal deleted successfully" });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export default {
    getAllProposals,
    getProposalById,
    createProposal,
    updateProposal,
    deleteProposal
};