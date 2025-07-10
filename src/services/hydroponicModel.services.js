import hydroponicModelRepository from "../repositories/hydroponicModel.repository.js";

const findById = async (id) => {
    try {
        const hydroModel = await hydroponicModelRepository.findById(id);
        if(!hydroModel) {
            throw new Error("Hydroponic model not found.");
        }
        return hydroModel;
    } catch (error) {
        throw error
    }
};

const add = async (data, file) => {
    try {
        if(file) {
            data.hydromodel_image = file.filename;
        }
        return await hydroponicModelRepository.create(data);
    } catch (error) {
        throw error
    }
};

const update = async (id, data, file) => {
    try {
        if(file) {
            data.hydromodel_image = file.filename;
        }
        const result = await hydroponicModelRepository.update(id, data);
        if(result === 1) {
            return await hydroponicModelRepository.findById(id);
        } else {
            throw new Error("Hydroponic model not found.")
        }
    } catch (error) {
        throw error
    }
};

const remove = async (id) => {
    try {
        const result = await hydroponicModelRepository.remove(id);
        if(result === 0) {
            throw new Error("Hydroponic model not found.")
        }
        return result;
    } catch (error) {
        throw error
    }
};

export default {
    findById,
    add,
    update,
    remove
}