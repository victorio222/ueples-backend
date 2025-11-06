import UserRole from "../models/userRole.model.js"

const findAll = async () => {
    return await UserRole.findAll();
};

const create = async (data) => {
    return await UserRole.create(data);
};

export default {
    findAll,
    create
}