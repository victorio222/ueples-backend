import ProposalFiles from '../models/proposalFiles.model.js'

const findAll = async () => {
    return await ProposalFiles.findAll({
        include: ["proposal", "revision", "uploader"]
    });
};

const findById = async (id) => {
    return await ProposalFiles.findByPk(id, {
        include: ["proposal", "revision", "uploader"]
    });
};

const create = async (data) => {
    return await ProposalFiles.create(data);
};

const update = async (id, data) => {
    return await ProposalFiles.update(data, { where: { file_id: id } });
};

const deleteById = async (id) => {
    return await ProposalFiles.destroy({ where: { file_id: id } });
};

export default {
    findAll,
    findById,
    create,
    update,
    deleteById
};