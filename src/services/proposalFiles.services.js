import ProposalFilesRepository from "../repositories/proposalFiles.repository.js";

const getAllFiles = async () => {
    return await ProposalFilesRepository.findAll();
};

const getFileById = async (id) => {
    const file = await ProposalFilesRepository.findById(id);
    if (!file) throw new Error("File not found.");
    return file;
};

const createFile = async (data) => {
    return await ProposalFilesRepository.create(data);
};

const updateFile = async (id, data) => {
    const result = await ProposalFilesRepository.update(id, data);
    if (result[0] === 0) throw new Error("File not found or no changes applied.");
    return await ProposalFilesRepository.findById(id);
};

const deleteFile = async (id) => {
    const deleted = await ProposalFilesRepository.deleteById(id);
    if (!deleted) throw new Error("File not found.");
    return true;
};

export default {
    getAllFiles,
    getFileById,
    createFile,
    updateFile,
    deleteFile
};