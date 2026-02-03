import RevisionHistory from "../models/revisionHistory.model.js";

const findAll = async () => {
    return await RevisionHistory.findAll({
        include: ["proposal", "reviser", "files"]
    });
};

const findById = async (id) => {
    return await RevisionHistory.findByPk(id, {
        include: ["proposal", "reviser", "files"]
    });
};

const create = async (data) => {
    return await RevisionHistory.create(data);
};

const update = async (id, data) => {
    return await RevisionHistory.update(data, { where: { revision_id: id } });
};

const deleteById = async (id) => {
    return await RevisionHistory.destroy({ where: { revision_id: id } });
};

export default {
    findAll,
    findById,
    create,
    update,
    deleteById
};
