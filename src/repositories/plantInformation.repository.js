import PlantInformation from "../models/plantInformation.model.js";

const create = async (data) => {
    return await PlantInformation.create(data);
}

const update = async (id, data) => {
    const [plantData] = await PlantInformation.update(data, {
        where: { plant_id: id }
    });
    return plantData;
}

const remove = async (id) => {
    return await PlantInformation.destroy({
        where: { plant_id: id }
    });
};

const findById = async (id) => {
    return await PlantInformation.findByPk(id);
}

const findAll = async () => {
    return await PlantInformation.findAll();
}

export default {
    create, 
    update,
    remove,
    findById,
    findAll
}