import PlantRequirements from "../models/plantRequirement.model.js";

const addRequirement = async (requirements) => {
    return await PlantRequirements.create(requirements);
}

const updateRequirement = async (id, requirements) => {
    const [updateRequirements] = await PlantRequirements.update(requirements, {
        where: { plantreq_id: id }
    });
    return updateRequirements;
}

const findById = async (id) => {
    return await PlantRequirements.findByPk(id);
}

const remove = async (id) => {
    return await PlantRequirements.destroy({
        where: { plantreq_id: id }
    });
}

export default {
    addRequirement,
    updateRequirement,
    findById,
    remove
}