import ProposalRepository from "../repositories/proposals.repository.js";

const getAllProposals = async () => {
    return await ProposalRepository.findAll();
};

const getProposalById = async (id) => {
    const proposal = await ProposalRepository.findById(id);
    if (!proposal) throw new Error("Proposal not found.");
    return proposal;
};

const createProposal = async (data) => {
    return await ProposalRepository.create(data);
};

const updateProposal = async (id, data) => {
    const result = await ProposalRepository.update(id, data);
    if (result[0] === 0) throw new Error("Proposal not found or no changes applied.");
    return await ProposalRepository.findById(id);
};

const deleteProposal = async (id) => {
    const deleted = await ProposalRepository.deleteById(id);
    if (!deleted) throw new Error("Proposal not found.");
    return true;
};

export default {
    getAllProposals,
    getProposalById,
    createProposal,
    updateProposal,
    deleteProposal
};