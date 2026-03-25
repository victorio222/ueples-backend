import folderRepo from "../repositories/subfolder.repository.js";
import subfolderitemRepository from "../repositories/subfolderitem.repository.js";

class FolderService {

  async createMainFolder(name, doctype_id) {
    const existing = await folderRepo.findByNameAndParent(name, null, doctype_id);
    if (existing) {
      throw new Error(`A main folder named "${name}" already exists for this document type.`);
    }

    return await folderRepo.createFolder({
      name,
      doctype_id,
      parent_folder_id: null
    });
  }

  async createSubFolder(name, doctype_id, parent_folder_id) {

    const parent = await folderRepo.findById(parent_folder_id);

    if (!parent) {
      throw new Error("Parent folder not found");
    }

    const existing = await folderRepo.findByNameAndParent(name, null, doctype_id);
    if (existing) {
      throw new Error(`The folder "${name}" already exists within this directory.`);
    }

    return await folderRepo.createFolder({
      name,
      doctype_id,
      parent_folder_id
    });

  }

  async getRootFolders(doctype_id) {
    return await folderRepo.getRootFolders(doctype_id);
  }

  async getSubFolders(parent_folder_id) {
    return await folderRepo.getSubFolders(parent_folder_id);
  }

  async getAllFiles() {
    return await subfolderitemRepository.findAll();
  }

  async findByFolderId(folder_id) {
    if(!folder_id) {
      throw new Error("File not found.")
    }
    return await subfolderitemRepository.findByFolderId(folder_id);
  }

  async getNestedHierarchy(doctype_id) {
    if (!doctype_id) throw new Error("Document Type ID is required");
    
    return await folderRepo.getFolderTree(doctype_id);
  }

  async deleteFolder(id) {
    return await folderRepo.deleteFolder(id);
  }

}

export default new FolderService();