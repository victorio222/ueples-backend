import Sensors from "../models/sensors.model.js";

const findById = async (id) => {
    return await Sensors.findByPk(id);
};

const create = async (data) => {
    return await Sensors.create(data);
};

const update = async (id, data) => {
    const sensors = await Sensors.update(data, {
        where: { sensor_id: id }
    });
    return sensors;
};

const remove = async (id) => {
    return await Sensors.destroy({
        where: { sensor_id: id }
    })
}

export default {
    findById,
    create, 
    update,
    remove
}