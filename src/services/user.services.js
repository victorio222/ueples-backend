// import userRepository from "../repositories/user.repository.js";

// const findAll = async () => {
//     return await userRepository.findAll();
// };

// const findById = async (id) => {
//     return await userRepository.findById(id);
// }

// const updateUser = async (id, data, file) => {
//     if(file) {
//         data.user_image = file.filename
//     }
//     const updated = await userRepository.updateUser(id, data);
//     if(updated === 1) {
//         return await userRepository.findById(id);
//     } else {
//         throw new Error("User not found or no changes made!");
//     }
// }

// export default {
//     findAll,
//     findById,
//     updateUser
// }



import UserRepository from "../repositories/user.repository.js";
import crypto from "crypto";

const userRepo = new UserRepository();

const findAll = async () => {
    return await userRepo.findAll();
};

const findById = async (id) => {
    const user = await userRepo.findById(id);
    if (!user) throw new Error("User not found");
    return user;
};

const createUser = async (data, file) => {
    if (file) data.user_image = file.filename;

    // Generate invitation token if password not provided
    if (!data.password) {
        data.invite_token = crypto.randomBytes(32).toString("hex");
        data.status = "Inactive";
    }

    return await userRepo.createUser(data);
};

const updateUser = async (id, data, file) => {
    if (file) data.user_image = file.filename;

    const updated = await userRepo.updateUser(id, data);
    if (updated[0] === 0) throw new Error("User not found or no changes made");

    return await userRepo.findById(id);
};

const deleteUser = async (id) => {
    const deleted = await userRepo.deleteUser(id);
    if (!deleted) throw new Error("User not found");
    return true;
};

export default {
    findAll,
    findById,
    createUser,
    updateUser,
    deleteUser
};
