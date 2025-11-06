import Campuses from "../models/campuses.model"

const findAll = async () => {
    return await Campuses.findAll();
};

const findById = async (id) => {
    const campus = await Campuses.findById(id);
    if(!campus) throw new Error("Campus not found.");
    return campus;
};

const addCampus = async (data) => {
    return await Campuses.create(data);
};

const updateCampus = async (id, data) => {
    const updated = await Campuses.update(id, data);
    if(updated[0] === 0) throw new Error("Campus not found or no changes made.");
    return await Campuses.findById(id);
}

export default {
    findAll,
    findById,
    addCampus,
    update
}