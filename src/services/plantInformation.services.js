import plantInformationRepository from "../repositories/plantInformation.repository.js";

const findAll = async () => {
    return await plantInformationRepository.findAll();
}

const findById = async (id) => {
    return await plantInformationRepository.findById(id);
}

const add = async (data, file) => {
    if(file) {
        data.plant_image = file.filename;
    }
    return await plantInformationRepository.create(data);
}

const update = async (id, data, file) => {
     if(file) {
        data.plant_image = file.filename;
    }
    const result = await plantInformationRepository.update(id, data);
    if(result) {
        return await plantInformationRepository.findById(id)
    } else {
        throw new Error("Plant information not found.")
    }
}

const remove = async (id) => {
    const result = await plantInformationRepository.remove(id, data);
    if (result === 0) {
        throw new Error("Plant information not found.");
    }
    return result;
}

export default {
    findAll,
    findById,
    add, 
    update,
    remove
}