import Colleges from "../models/colleges.model"

const findAll = async () => {
    return await Colleges.findAll();
};

const findById = async (id) => {
    return await Colleges.findByPk(id);
};

const create = async (data) => {
    return await Colleges.create(data);
}

const update = async (id, data) => {
    const [college] = await Colleges.update(data, {
        where: { college_id: id }
    });
    return college;
}

export default {
    findAll,
    findById,
    create,
    update
}