import Invitation from "../models/invitation.model.js";

const findAll = async () => {
    return await Invitation.findAll();
};

const findById = async (id) => {
    return await Invitation.findByPk(id);
};

const findByToken = async (token) => {
    return await Invitation.findOne({ where: { token } });
};

const create = async (data) => {
    return await Invitation.create(data);
};

const update = async (id, data) => {
    return await Invitation.update(data, { where: { invitation_id: id } });
};

const deleteById = async (id) => {
    return await Invitation.destroy({ where: { invitation_id: id } });
};

export default {
    findAll,
    findById,
    findByToken,
    create,
    update,
    deleteById,
};
