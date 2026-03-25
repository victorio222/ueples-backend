import DocumentType from "../models/documentType.model.js";

class DocumentTypeRepository {
    // Used by Service to check for duplicates
    async findByLabel(label) {
        return await DocumentType.findOne({
            where: { name: label }
        });
    }

    async findAll() {
        return await DocumentType.findAll({
            order: [['name', 'DESC']]
        });
    }

    async findById(id) {
        return await DocumentType.findByPk(id);
    }

    async create(data) {
        return await DocumentType.create(data);
    }

    async updateFolder (id, data) {
    const [folder] = await DocumentType.update(data, {
        where: { doctype_id: id }
    });
    return folder;
}

    // async findOrCreate(label) {
    //     return await DocumentType.findOrCreate({
    //         where: { name: label },
    //         defaults: {
    //             name: label,
    //         }
    //     });
    // }

    async findOrCreate(data) {
        const { name, isBatchesImported = false, isSubFolder = false } = data;
        return await DocumentType.findOrCreate({
            where: { name },
            defaults: {
                name,
                isBatchesImported,
            },
        });
    }

    async update(id, name) {
        return await DocumentType.update({ name }, {
            where: { doctype_id: id }
        });
    }

    async delete(id) {
        return await DocumentType.destroy({
            where: { doctype_id: id }
        });
    }
}

// DocumentType.addHook('afterSoftDelete', async (instance, options) => {
//     const { doctype_id } = instance;
//     const trans = { transaction: options.transaction };

//     await sequelize.models.AcademicYear.destroy({ where: { doctype_id }, ...trans });
//     await sequelize.models.SubFolder.destroy({ where: { doctype_id }, ...trans });
// });

export default new DocumentTypeRepository();