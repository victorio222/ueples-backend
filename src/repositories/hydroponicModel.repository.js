import HydroponicModel from "../models/hydroponicModel.model.js";

const findById = async (id) => {
    return await HydroponicModel.findByPk(id);
};

const create = async (data) => {
    return await HydroponicModel.create(data);
}

const update = async (id, data) => {
    const result = await HydroponicModel.update(data, {
        where: { hydromodel_id: id }
    });
    return result;
};

const remove = async (id) => {
    return await HydroponicModel.destroy({
        where: { hydromodel_id: id }
    });
};

export default {
    findById,
    create,
    update,
    remove
}