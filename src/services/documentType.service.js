import documentTypeRepository from "../repositories/documentType.repository.js";

class DocumentTypeService {
    // async add(data) {
    //            // Instead of throwing an error, you can return the existing one
    //     const [name, created] = await documentTypeRepository.findOrCreate(data);

    //     if (!created) {
    //         // You can still throw an error, or just return the record with a custom status
    //         throw new Error("This folder already exists.");
    //     }

    //     return name;
    // }

    async add(data) {
        // Ensure data contains the "name" and optional "isBatchesImported" flag
        const { name, isBatchesImported = false, isSubFolder = false } = data;

        // Use findOrCreate to avoid duplicates
        const [doctype, created] = await documentTypeRepository.findOrCreate({
            name,
            isBatchesImported,
        });

        if (!created) {
            throw new Error("This folder already exists.");
        }

        // Return the full object (matches controller expectations)
        return doctype;
    }

    async findAll() {
        return await documentTypeRepository.findAll();
    }

    async findByName(name) {
        return await documentTypeRepository.findByLabel(name);
    }

    async update (id, data) {
        const updated = await documentTypeRepository.updateFolder(id, data);
        if (updated[0] === 0) throw new Error("Folder not found or no changes made");
    
        return await documentTypeRepository.findById(id);
    };

    async delete(id) {
        return await documentTypeRepository.delete(id);
    }
}

export default new DocumentTypeService();