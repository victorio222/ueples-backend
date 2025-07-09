import CropSeasons from "../models/cropSeasons.model.js";

const create = async (data) => {
    return await CropSeasons.create(data);
};

const update = async (id, data) => {
    const [result] = await CropSeasons.update(data, {
        where: { season_id: id }
    });
    return result;
}

const findById = async (id) => {
    return await CropSeasons.findByPk(id);
}

const remove = async (id) => {
    return await CropSeasons.destroy({
        where: { season_id: id }
    });
}

export default {
    create,
    update,
    findById,
    remove
}