import cropSeasonsRepository from "../repositories/cropSeasons.repository.js";

const findById = async (id) => {
    try {
        const result = await cropSeasonsRepository.findById(id);
        if(!result) {
            throw new Error("Crop season not found.");
        };
        return result;
    } catch (error) {
        throw error
    }
}

const add = async (data) => {
    try {
        const result = await cropSeasonsRepository.create(data);
        return(result);
    } catch (error) {
        throw new Error("Failed to add data");
    }
}

const update = async (id, data) => {
    try {
        const result = await cropSeasonsRepository.update(id, data);
        if(result === 1) {
            return await cropSeasonsRepository.findById(id);
        } else {
            throw new Error("Crop season not found.")
        }
    } catch (error) {
        throw error;
    }
}

const remove = async (id) => {
    const result = await cropSeasonsRepository.remove(id);
    if(result === 0) {
        throw new Error("Crop season not found.");
    }
    return result;
}

export default {
    findById,
    add,
    update,
    remove
}