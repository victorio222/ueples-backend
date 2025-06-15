import User from "../models/user.model.js";

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

export default {
    findByEmail,
    updateToken
}