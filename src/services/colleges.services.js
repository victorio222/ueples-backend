import collegesRepository from "../repositories/colleges.repository.js";


const findAll = async () => {
    return await collegesRepository.findAll();
};

const findById = async (id) => {
    const college = await collegesRepository.findById(id);
    if(!college) {
        throw new Error("College not found");
    };

    return college;
};

const addCollege = async (data) => {
    return await collegesRepository.create(data);
};

const updateCollege = async (id, data) => {
    const updated = await collegesRepository.update(id, data);
    if(updated[0] === 0) {
        throw new Error("College not found or no changes made.")
    };
    return await collegesRepository.findById(id);
};

export default {
    findAll,
    findById,
    addCollege,
    updateCollege
}