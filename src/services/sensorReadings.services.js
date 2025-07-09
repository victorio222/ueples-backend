import sensorReadingsRepository from "../repositories/sensorReadings.repository.js";

const findById = async (id) => {
    const readings = await sensorReadingsRepository.findById(id);
    if(!sensor) {
        throw new Error("Sensor readings not found.")
    }
    return readings;
};

const add = async (data) => {
    try {
        return await sensorReadingsRepository.create(data);
    } catch (error) {
        throw error
    }
};

export default {
    findById,
    add
}