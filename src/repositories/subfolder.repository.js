import SubFolderItem from "../models/folderItem.model.js";
import Folder from "../models/subFolderDocs.model.js";

class FolderRepository {

  async createFolder(data) {
    return await Folder.create(data);
  }

  async findById(id) {
    return await Folder.findByPk(id);
  }

  async findByNameAndParent(name, parent_folder_id, doctype_id) {
    return await Folder.findOne({
      where: {
        name,
        parent_folder_id,
        doctype_id
      }
    });
  }

  async getRootFolders(doctype_id) {
    return await Folder.findAll({
      where: {
        doctype_id,
        parent_folder_id: null
      }
    });
  }

  async getSubFolders(parent_folder_id) {
    return await Folder.findAll({
      where: { parent_folder_id }
    });
  }

  async getFolderTree(doctype_id) {
    return await Folder.findAll({
      where: { 
        doctype_id, 
        parent_folder_id: null // Start from the top
      },
      include: [
        {
          model: SubFolderItem,
          as: 'items' // Fetch files at the root level
        },
        {
          model: Folder,
          as: 'children', // Recursive subfolders
          include: [
            { model: SubFolderItem, as: 'items' }, // Files inside subfolders
            { 
              model: Folder, 
              as: 'children', // Go one level deeper
              include: [{ model: SubFolderItem, as: 'items' }] 
            }
          ]
        }
      ]
    });
  }

  async deleteFolder(id) {
    return await Folder.destroy({
      where: { folder_id: id }
    });
  }

}

export default new FolderRepository();