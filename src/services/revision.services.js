import RevisionRepository from "../repositories/revision.repository.js";

const getAllRevisions = async () => {
    return await RevisionRepository.findAll();
};

const getRevisionById = async (id) => {
    const revision = await RevisionRepository.findById(id);
    if (!revision) throw new Error("Revision not found.");
    return revision;
};

const createRevision = async (data) => {
    return await RevisionRepository.create(data);
};

const updateRevision = async (id, data) => {
    const result = await RevisionRepository.update(id, data);
    if (result[0] === 0) throw new Error("Revision not found or no changes applied.");
    return await RevisionRepository.findById(id);
};

const deleteRevision = async (id) => {
    const deleted = await RevisionRepository.deleteById(id);
    if (!deleted) throw new Error("Revision not found.");
    return true;
};

export default {
    getAllRevisions,
    getRevisionById,
    createRevision,
    updateRevision,
    deleteRevision
};
