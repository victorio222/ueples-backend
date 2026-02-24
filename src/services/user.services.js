import userRepository from "../repositories/user.repository.js";
import crypto from "crypto";
import bcrypt from 'bcrypt'

const findAll = async () => {
    return await userRepository.findAll();
};

const findById = async (id) => {
    const user = await userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
};

const createUser = async (data, file) => {
    if (file) data.user_image = file.filename;

    // Generate invitation token if password not provided
    if (!data.password) {
        data.invite_token = crypto.randomBytes(32).toString("hex");
        // data.status = "Active";
    }

    return await userRepository.createUser(data);
};

const updateUser = async (id, data, file) => {
    if (file) data.user_image = file.filename;

    const updated = await userRepository.updateUser(id, data);
    if (updated[0] === 0) throw new Error("User not found or no changes made");

    return await userRepository.findById(id);
};

const changePassword = async (userId, oldPassword, newPassword) => {
    const user = await userRepository.findById(userId);
    if (!user) throw { status: 404, message: "User not found" };

    // 1. Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) throw { status: 400, message: "Incorrect current password" };

    // 2. Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // 3. Update in DB
    return await userRepository.updatePassword(userId, hashedNewPassword);
};

const updateUserStatus = async (id, data) => {
    const updated = await userRepository.updateUser(id, data);
    if (updated[0] === 0) throw new Error("User not found or no changes made");

    return await userRepository.findById(id);
};

const deleteUser = async (id) => {
    const deleted = await userRepository.deleteUser(id);
    if (!deleted) throw new Error("User not found");
    return true;
};

export default {
    findAll,
    findById,
    createUser,
    updateUser,
    changePassword,
    updateUserStatus,
    deleteUser
};
