import userRepository from "../repositories/user.repository.js";

const findAll = async () => {
    return await userRepository.findAll();
};

const findById = async (id) => {
    return await userRepository.findById(id);
}

const updateUser = async (id, data) => {
    const updatedUser = await userRepository.updateUser(id, data);
    if(updatedUser === 1) {
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