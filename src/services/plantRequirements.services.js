import plantRequirementsRepository from "../repositories/plantRequirements.repository.js";

const findById = async (id) => {
    try {
        const result = await plantRequirementsRepository.findById(id);
        if(!result) {
            throw new Error("Plant requirements not found.");
        };
        return result;
    } catch (error) {
        throw error
    }
}

const addRequirement = async (requirements) => {
    try {
        const result = await plantRequirementsRepository.addRequirement(requirements);
        return(result);
    } catch (error) {
        throw new Error("Failed to add new requirements");
    }
}

const updateRequirement = async (id, requirements) => {
    try {
        const result = await plantRequirementsRepository.updateRequirement(id, requirements);
        if(result === 1) {
            return await plantRequirementsRepository.findById(id);
        } else {
            throw new Error("Plant requirements not found.")
        }
    } catch (error) {
        throw error;
    }
}

const deleteRequirement = async (id) => {
    const result = await plantRequirementsRepository.remove(id);
    if(result === 0) {
        throw new Error("Plant requirements not found.");
    }
    return result;
}

export default {
    findById,
    addRequirement,
    updateRequirement,
    deleteRequirement
}