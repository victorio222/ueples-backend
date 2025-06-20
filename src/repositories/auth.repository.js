import User from "../models/user.model.js";

const create = async (data) => {
    return await User.create(data);
}

const findByEmail = async (email) => {
    return await User.findOne({ 
        where: {email}
     });
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
    create,
    findByEmail,
    updateToken,
    verifyUserEmail
}