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

    async create(data) {
        return await DocumentType.create(data);
    }

    async findOrCreate(label) {
        return await DocumentType.findOrCreate({
            where: { name: label },
            defaults: {
                name: label,
            }
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

export default new DocumentTypeRepository();