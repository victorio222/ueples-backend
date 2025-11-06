import Colleges from "../models/colleges.model"

const findAll = async () => {
    return await Colleges.findAll();
};

const findById = async (id) => {
    const college = await Colleges.findById(id);
    if(!college) {
        throw new Error("College not found");
    };

    return college;
};

const addCollege = async (data) => {
    return await Colleges.create(data);
};

const updateCollege = async (id, college) => {
    const updated = await Colleges.update(id, data);
    if(updated[0] === 0) {
        throw new Error("College not found or no changes made.")
    };
    return await Colleges.findById(id);
};

export default {
    findAll,
    findById,
    addCollege,
    updateCollege
}