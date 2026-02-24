import documentTypeRepository from "../repositories/documentType.repository.js";

class DocumentTypeService {
    async add(data) {
               // Instead of throwing an error, you can return the existing one
        const [name, created] = await documentTypeRepository.findOrCreate(data);

        if (!created) {
            // You can still throw an error, or just return the record with a custom status
            throw new Error("This folder already exists.");
        }

        return name;
    }

    async findAll() {
        return await documentTypeRepository.findAll();
    }
}

export default new DocumentTypeService();