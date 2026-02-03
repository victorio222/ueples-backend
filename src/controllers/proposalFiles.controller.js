import ProposalFilesService from "../services/proposalFiles.services.js";

const getAllFiles = async (req, res) => {
    try {
        const files = await ProposalFilesService.getAllFiles();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getFileById = async (req, res) => {
    try {
        const file = await ProposalFilesService.getFileById(req.params.id);
        res.json(file);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const createFile = async (req, res) => {
    try {
        const created = await ProposalFilesService.createFile(req.body);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateFile = async (req, res) => {
    try {
        const updated = await ProposalFilesService.updateFile(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteFile = async (req, res) => {
    try {
        await ProposalFilesService.deleteFile(req.params.id);
        res.json({ message: "File deleted successfully" });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export default {
    getAllFiles,
    getFileById,
    createFile,
    updateFile,
    deleteFile
};