import userServices from "../services/user.services.js";

const getAll = async (req, res) => {
    try {
        const user = await userServices.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await userServices.findById(userId);
        if(!user) res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        const user = await userServices.updateUser(userId, data);
        if(!user) res.status(404).json({ message: "User not found" });
        res.status(200).json({
            message: "User updated successfully!",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getAll,
    getUserById,
    updateUser
}