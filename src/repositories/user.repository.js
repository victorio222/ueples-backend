// import User from "../models/user.model.js";

// const findAll = async () => {
//     return await User.findAll();
// }

// const findById = async (id) => {
//     return await User.findByPk(id);
// }

// const updateUser = async (id, data) => {
//     const [user] = await User.update(data, {
//         where: { user_id: id }
//     });
//     return user;
// }

// export default {
//     findAll,
//     findById,
//     updateUser
// }







import User from "../models/user.model.js";

export default class UserRepository {
    async findAll() {
        return await User.findAll();
    }

    async findById(id) {
        return await User.findByPk(id);
    }

    async findByEmail(email) {
        return await User.findOne({ where: { email } });
    }

    async createUser(data) {
        return await User.create(data);
    }

    async updateUser(id, data) {
        return await User.update(data, { where: { user_id: id } });
    }

    async deleteUser(id) {
        return await User.destroy({ where: { user_id: id } });
    }
}
