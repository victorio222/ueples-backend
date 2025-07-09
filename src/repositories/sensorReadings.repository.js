import SensorReadings from "../models/sensorReadings.model.js";

const findById = async (id) => {
    return await SensorReadings.findByPk(id);
};

const create = async (data) => {
    return await SensorReadings.create(data);
};

export default {
    findById,
    create,
}