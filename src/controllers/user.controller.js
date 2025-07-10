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
        const image = req.files?.user_image?.[0];
        const data = req.body;
        const updated = await userServices.updateUser(userId, data, image);
        if(!updated) res.status(404).json({ message: "User not found" });
        res.status(200).json({
            message: "User updated successfully!",
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
    updateUser
}