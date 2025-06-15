import User from "../models/user.model.js";

const findAll = async () => {
    return await User.findAll();
}

const findById = async (id) => {
    return await User.findByPk(id);
}

const updateUser = async (id, data) => {
    const [user] = await User.update(data, {
        where: { user_id: id }
    });
    return user;
}

export default {
    findAll,
    findById,
    updateUser
}