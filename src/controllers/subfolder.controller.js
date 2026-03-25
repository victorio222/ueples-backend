import { Op } from "sequelize";
import SubFolder from "../models/subFolderDocs.model.js";
import folderService from "../services/subfolder.service.js";
import SubFolderItem from "../models/folderItem.model.js";

class FolderController {

  async createMainFolder(req, res) {
    try {

      const { name, doctype_id } = req.body;

      const folder = await folderService.createMainFolder(
        name,
        doctype_id
      );

      res.json(folder);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createSubFolder(req, res) {

    try {

      const { name, doctype_id, parent_folder_id } = req.body;

      const folder = await folderService.createSubFolder(
        name,
        doctype_id,
        parent_folder_id
      );

      res.json(folder);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }

  }

  async getRootFolders(req, res) {

    try {

      const { doctype_id } = req.params;

      const folders = await folderService.getRootFolders(doctype_id);

      res.json(folders);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }
  }

  async getSubFolders(req, res) {

    try {

      const { parent_id } = req.params;

      const folders = await folderService.getSubFolders(parent_id);

      res.json(folders);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }

  }

  async getTree(req, res) {
    try {
      const { doctype_id } = req.params;
      const tree = await folderService.getNestedHierarchy(doctype_id);

      res.status(200).json(tree);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllFiles(req, res) {
    try {
      const files = await folderService.getAllFiles();

      res.json(files);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }
  }

  async getByFolderId(req, res) {

    try {

      const { folder_id } = req.params;

      const files = await folderService.findByFolderId(folder_id);

      res.json(files);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }
  }

  async renameFolder(req, res) {
    try {
      const { id } = req.params;
      let { name } = req.body;

      if (!name || name.trim() === "") {
        return res.status(400).json({ success: false, message: "New folder name is required." });
      }

      // 1. Find current folder
      const currentFolder = await SubFolder.findByPk(id);
      if (!currentFolder) {
        return res.status(404).json({ success: false, message: "Folder not found." });
      }

      const parentId = currentFolder.parent_folder_id;
      const docTypeId = currentFolder.doctype_id;

      // 2. Logic for incremental naming
      let finalName = name.trim();
      let counter = 1;
      let nameExists = true;

      while (nameExists) {
        const existing = await SubFolder.findOne({
          where: {
            name: finalName,
            parent_folder_id: parentId, // Sequelize handles null correctly here
            doctype_id: docTypeId,
            // Use the imported 'Op' directly
            folder_id: { [Op.ne]: id }
          }
        });

        if (existing) {
          counter++;
          finalName = `${name.trim()} (${counter})`;
        } else {
          nameExists = false;
        }
      }

      // 3. Perform the update
      currentFolder.name = finalName;
      await currentFolder.save();

      return res.status(200).json({
        success: true,
        message: counter > 1 ? `Renamed to ${finalName}` : "Folder renamed successfully",
        data: currentFolder
      });
    } catch (error) {
      console.error("Rename Error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Server error during folder rename."
      });
    }
  }

  async renameFile(req, res) {
    try {
      const { id } = req.params;
      let { name } = req.body;

      if (!name || name.trim() === "") {
        return res.status(400).json({ success: false, message: "New file name is required." });
      }

      // 1. Find the specific file (SubFolderItem)
      const currentFile = await SubFolderItem.findByPk(id);
      if (!currentFile) {
        return res.status(404).json({ success: false, message: "File not found." });
      }

      const folder_id = currentFile.folder_id;
      const baseName = name.trim();
      let finalName = baseName;
      let counter = 1;
      let nameExists = true;

      // 2. Logic for incremental naming (Checking SubFolderItem table)
      while (nameExists) {
        // Check if a file with this name already exists in the SAME folder
        // and is NOT the file we are currently renaming
        const existing = await SubFolderItem.findOne({
          where: {
            name: finalName,
            folder_id: folder_id,
            // Use Op.ne to ignore the current record if the user 
            // submits the same name it already has
            file_id: { [Op.ne]: id }
          }
        });

        if (existing) {
          counter++;
          finalName = `${baseName} (${counter})`;
        } else {
          nameExists = false;
        }
      }

      // 3. Perform the update
      currentFile.name = finalName;
      await currentFile.save();

      return res.status(200).json({
        success: true,
        message: counter > 1 ? `Renamed to ${finalName}` : "File renamed successfully",
        data: currentFile
      });
    } catch (error) {
      console.error("Rename Error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Server error during file rename."
      });
    }
  }

  // async renameFolder(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const { name } = req.body; // 'name' comes from the 'data' object sent by React

  //     if (!name || name.trim() === "") {
  //       return res.status(400).json({
  //         success: false,
  //         message: "New folder name is required."
  //       });
  //     }

  //     // Using Sequelize to update
  //     const [updatedRows] = await SubFolder.update(
  //       { name: name },
  //       { where: { folder_id: id } }
  //     );

  //     if (updatedRows === 0) {
  //       return res.status(404).json({
  //         success: false,
  //         message: "Folder not found or no changes made."
  //       });
  //     }

  //     // Fetch the updated folder to return to the frontend
  //     const updatedFolder = await SubFolder.findByPk(id);

  //     return res.status(200).json({
  //       success: true,
  //       message: "Folder renamed successfully",
  //       data: updatedFolder
  //     });
  //   } catch (error) {
  //     console.error("Rename Error:", error);
  //     return res.status(500).json({
  //       success: false,
  //       message: "Server error during folder rename."
  //     });
  //   }
  // };

  async deleteFolder(req, res) {

    try {

      const { id } = req.params;

      await folderService.deleteFolder(id);

      res.json({ message: "Folder deleted" });

    } catch (error) {

      res.status(500).json({ message: error.message });

    }

  }

}

export default new FolderController();