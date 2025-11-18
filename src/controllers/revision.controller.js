import RevisionService from "../services/revision.service.js";

const getAllRevisions = async (req, res) => {
    try {
        const revisions = await RevisionService.getAllRevisions();
        res.json(revisions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getRevisionById = async (req, res) => {
    try {
        const revision = await RevisionService.getRevisionById(req.params.id);
        res.json(revision);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const createRevision = async (req, res) => {
    try {
        const created = await RevisionService.createRevision(req.body);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateRevision = async (req, res) => {
    try {
        const updated = await RevisionService.updateRevision(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteRevision = async (req, res) => {
    try {
        await RevisionService.deleteRevision(req.params.id);
        res.json({ message: "Revision deleted successfully" });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export default {
    getAllRevisions,
    getRevisionById,
    createRevision,
    updateRevision,
    deleteRevision
};
