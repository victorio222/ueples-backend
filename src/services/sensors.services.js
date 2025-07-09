import sensorsRepository from "../repositories/sensors.repository.js";

const findById = async (id) => {
    const sensor = await sensorsRepository.findById(id);
    if(!sensor) {
        throw new Error("Sensor not found.")
    }
    return sensor;
};

const add = async (data) => {
    try {
        return await sensorsRepository.create(data);
    } catch (error) {
        throw error
    }
};

const update = async (id, data) => {
    try {
        const result = await sensorsRepository.update(id, data);
        if(result === 1) {
            return await sensorsRepository.findById(id);
        } else {
            throw new Error("Sensor not found.");
        }
    } catch (error) {
        throw error
    }
};

const remove = async (id) => {
    try {
        const result = await sensorsRepository.remove(id);
        if(result === 0) {
            throw new Error("Sensor not found.");
        }
        return result;
    } catch (error) {
        throw error
    }
}

export default {
    findById,
    add, 
    update,
    remove
}