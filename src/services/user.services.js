import userRepository from "../repositories/user.repository.js";

const findAll = async () => {
    return await userRepository.findAll();
};

const findById = async (id) => {
    return await userRepository.findById(id);
}

const updateUser = async (id, data, file) => {
    if(file) {
        data.user_image = file.filename
    }
    const updated = await userRepository.updateUser(id, data);
    if(updated === 1) {
        return await userRepository.findById(id);
    } else {
        throw new Error("User not found or no changes made!");
    }
}

export default {
    findAll,
    findById,
    updateUser
}