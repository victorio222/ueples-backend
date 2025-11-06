import campusesRepository from "../repositories/campuses.repository.js";

const findAll = async () => {
    return await campusesRepository.findAll();
};

const findById = async (id) => {
    const campus = await campusesRepository.findById(id);
    if(!campus) throw new Error("Campus not found.");
    return campus;
};

const addCampus = async (data) => {
    return await campusesRepository.create(data);
};

const updateCampus = async (id, data) => {
    const updated = await campusesRepository.update(id, data);
    if(updated[0] === 0) throw new Error("Campus not found or no changes made.");
    return await campusesRepository.findById(id);
}

export default {
    findAll,
    findById,
    addCampus,
    updateCampus
}