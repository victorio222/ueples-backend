import Campuses from "../models/campuses.model"

const findAll = async () => {
    return await Campuses.findAll();
};

const findById = async (id) => {
    return await Campuses.findByPk(id);
};

const create = async (data) => {
    return await Campuses.create(data);
};

const update = async (id, data) => {
    const [campus] = await Campuses.update(data, {
            where: { campus_id: id }
        }
    );
};

export default {
    findAll,
    findById,
    create,
    update
}