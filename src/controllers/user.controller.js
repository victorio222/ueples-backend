import userRepository from "../repositories/user.repository.js";
import userServices from "../services/user.services.js";

const getAll = async (req, res) => {
    try {
        const user = await userServices.findAll();
        res.status(200).json({
            status: "success",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const fetchAll = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const result = await userRepository.fetchPaged(page, limit);

        res.status(200).json({
            totalItems: result.count,
            totalPages: Math.ceil(result.count / limit),
            currentPage: parseInt(page),
            data: result.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await userServices.findById(userId);
        if (!user) res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const image = req.file;
        const data = req.body;
        const updated = await userServices.updateUser(userId, data, image);
        if (!updated) res.status(404).json({ message: "User not found" });
        res.status(200).json({
            message: "User updated successfully!",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error)
    }
}

const changePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { old_password, new_password } = req.body;

        await userServices.changePassword(id, old_password, new_password);

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}


const updateStatus = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        const updated = await userServices.updateUserStatus(userId, data);
        if (!updated) res.status(404).json({ message: "User not found" });
        res.status(200).json({
            message: "User status updated successfully!",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error)
    }
}

export default {
    getAll,
    getUserById,
    updateUser,
    changePassword,
    updateStatus,
    fetchAll
}