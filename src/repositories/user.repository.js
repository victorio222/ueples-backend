import User from "../models/user.model.js";
import UserRole from "../models/userRole.model.js";

const findAll = async () => {
    return await User.findAll({
        include: [
            {
                model: UserRole,
                as: "role",
                attributes: ["role_name"]
            }
        ]
    });
}

const findById = async (id) => {
    return await User.findByPk(id, {
        include: [
            {
                model: UserRole,
                as: "role",
                attributes: ["role_name"]
            }
        ]
    });
}

const findByEmail = async (email) => {
    return await User.findOne({
        where: { email },
        include: [
            {
                model: UserRole,
                as: "role",
                attributes: ["role_name"]
            }
        ]
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

const updatePassword = async (id, hashedPassword) => {
    const [user] = await User.update({ password: hashedPassword }, {
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

const fetchPaged = async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;

    return await User.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        include: [
            {
                model: UserRole,
                as: 'role',
            }
        ],
        order: [['created_at', 'DESC']]
    });
}

export default {
    findAll,
    findById,
    updateUser,
    updatePassword,
    create,
    findByEmail,
    updateToken,
    verifyUserEmail,
    fetchPaged
}