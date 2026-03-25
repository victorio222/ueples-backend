import DocumentType from '../models/documentType.model.js';
import AcademicYearService from '../services/academicYear.service.js';
import documentTypeService from '../services/documentType.service.js';
import { Op } from 'sequelize';

class DocumentTypeController {
    async store(req, res) {
        try {
            const docType = await documentTypeService.add(req.body);
            return res.status(201).json(docType);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async index(req, res) {
        try {
            const names = await documentTypeService.findAll();
            // Wrap in status and data
            return res.status(200).json({
                status: 'success',
                data: names
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getByName(req, res) {
        try {
            const name = req.params.name; // /type/name/:name
            const doctype = await documentTypeService.findByName(name);

            if (!doctype)
                return res.status(404).json({ message: "Document Type not found" });

            return res.status(200).json({ status: "success", data: doctype });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // async update(req, res) {
    //     try {
    //         const folderId = req.params.id;
    //         const data = req.body;
    //         const updated = await documentTypeService.update(folderId, data);
    //         if (!updated) res.status(404).json({ message: "Folder not found" });
    //         res.status(200).json({
    //             message: "Folder updated successfully!",
    //             data: updated
    //         });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //         console.error(error)
    //     }
    // }

    async update(req, res) {
        try {
            const folderId = req.params.id;
            const { name, ...otherData } = req.body; // Destructure to get the name

            if (!name) {
                return res.status(400).json({ message: "Name is required" });
            }

            // 1. Incremental Logic
            let finalName = name.trim();
            let counter = 1;
            let exists = true;

            while (exists) {
                // We query the Model directly to check for existing names
                const duplicate = await DocumentType.findOne({
                    where: {
                        name: finalName,
                        doctype_id: { [Op.ne]: folderId } // Exclude current folder
                    }
                });

                if (duplicate) {
                    counter++;
                    finalName = `${name.trim()} (${counter})`;
                } else {
                    exists = false;
                }
            }

            // 2. Prepare the final data to send to the Service
            const updateData = { ...otherData, name: finalName };

            // 3. Call Service
            const updated = await documentTypeService.update(folderId, updateData);

            if (!updated) {
                return res.status(404).json({ message: "Folder not found" });
            }

            res.status(200).json({
                message: counter > 1
                    ? `Folder updated successfully as ${finalName}!`
                    : "Folder updated successfully!",
                data: updated
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await documentTypeService.delete(id);

            if (!result) {
                return res.status(404).json({ message: "Category not found or already deleted" });
            }

            res.status(200).json({
                message: "Category moved to trash successfully (soft deleted).",
                data: id
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new DocumentTypeController();