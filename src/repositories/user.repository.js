import User from "../models/user.model.js";

const findAll = async () => {
    return await User.findAll();
}

const findById = async (id) => {
    return await User.findByPk(id);
}

const findByEmail = async (email) => {
    return await User.findOne({
        where: { email }
    });
}

const create = async (data) => {
    return await User.create(data);
}

const updateUser = async (id, data) => {
    const [user] = await User.update(data, {
        where: { user_id: id }
    });
    return user;
}

const updateToken = async (id, remember_token) => {
    const [updated] = await User.update(
        { remember_token },
        { where: { user_id: id } }
    )
    return updated
}

const verifyUserEmail = async (email) => {
  return await User.update({ is_verified: true }, { where: { email } });
};

export default {
    findAll,
    findById,
    updateUser,
    create,
    findByEmail,
    updateToken, 
    verifyUserEmail
}