import userroleServices from "../services/userrole.services.js"

const getAllRoles = async (req, res) => {
    try {
        const roles = await userroleServices.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const addRoles = async (req, res) => {
    try {
        const role = await userroleServices.addUserRole(req.body);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

export default {
    getAllRoles,
    addRoles
}