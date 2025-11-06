import Campuses from "../models/campuses.model.js";
import Colleges from "../models/colleges.model.js"

const findAll = async () => {
    return await Colleges.findAll();
};

const findById = async (id) => {
    const college = await Colleges.findByPk(id, {
        include: [{
            model: Campuses,
            as: "campus",
            attributes: ["campus_id", "campus_name"]
        }]
    });
    return college;
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