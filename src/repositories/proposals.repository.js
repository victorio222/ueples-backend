import Proposals from "../models/proposals.model.js";

const findAll = async () => {
    return await Proposals.findAll({
        include: ["announcement"] // eager load related announcement
    });
};

const findById = async (id) => {
    return await Proposals.findByPk(id, {
        include: ["announcement"]
    });
};

const create = async (data) => {
    return await Proposals.create(data);
};

const update = async (id, data) => {
    return await Proposals.update(data, { where: { proposal_id: id } });
};

const deleteById = async (id) => {
    return await Proposals.destroy({ where: { proposal_id: id } });
};

export default {
    findAll,
    findById,
    create,
    update,
    deleteById
};