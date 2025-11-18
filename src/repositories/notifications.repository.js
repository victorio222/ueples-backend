import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";

const findAll = async () => {
    return await Notification.findAll({
        include: [{ model: User, as: "user", attributes: ["user_id", "name", "email"] }]
    });
};

const findById = async (id) => {
    return await Notification.findByPk(id, {
        include: [{ model: User, as: "user", attributes: ["user_id", "name", "email"] }]
    });
};

const create = async (data) => {
    return await Notification.create(data);
};

const update = async (id, data) => {
    return await Notification.update(data, { where: { notification_id: id } });
};

const deleteById = async (id) => {
    return await Notification.destroy({ where: { notification_id: id } });
};

export default {
    findAll,
    findById,
    create,
    update,
    deleteById
};
