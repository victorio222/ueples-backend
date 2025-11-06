import userroleRepository from "../repositories/userrole.repository.js"

const findAll = async () => {
    return await userroleRepository.findAll();
};

const addUserRole = async (data) => {
    return await userroleRepository.create(data);
};

export default {
    findAll,
    addUserRole
};