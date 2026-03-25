import sequelize from '../config/db.js';
import AcademicYear from "./academicYear.model.js";
import Address from './address.model.js';
import Documents from "./documents.model.js";
import DocumentType from './documentType.model.js';
import Education from './education.model.js';
import Faculty from './faculty.model.js';
import SubFolderItem from './folderItem.model.js';
import Students from "./students.model.js";
import SubFolder from './subFolderDocs.model.js';
import Training from './training.model.js';
import User from "./user.model.js";
import UserRole from './userRole.model.js';

// 1. Student <-> Documents
Students.hasMany(Documents, { foreignKey: 'student_id', as: 'documents' });
Documents.belongsTo(Students, { foreignKey: 'student_id', as: 'student' });

// 2. AcademicYear <-> Documents
AcademicYear.hasMany(Documents, { foreignKey: 'year_id', as: 'documents' });
Documents.belongsTo(AcademicYear, { foreignKey: 'year_id', as: 'academicYear' });

// 3. User <-> Documents
User.hasMany(Documents, { foreignKey: 'posted_by', as: 'uploadedDocuments' });
Documents.belongsTo(User, { foreignKey: 'posted_by', as: 'uploader' });

// 3. User <-> Documents
User.hasMany(SubFolderItem, { foreignKey: 'uploaded_by', as: 'uploadedFile' });
SubFolderItem.belongsTo(User, { foreignKey: 'uploaded_by', as: 'posted_by' });

// 4. User <-> UserRole (Many-to-One)
User.belongsTo(UserRole, { foreignKey: 'role_id', as: 'role' });
UserRole.hasMany(User, { foreignKey: 'role_id', as: 'users' });

// 5. DocumentType <-> SubFolder
DocumentType.hasMany(SubFolder, { foreignKey: 'doctype_id', onDelete: 'CASCADE', as: 'subFolders' });
SubFolder.belongsTo(DocumentType, { foreignKey: 'doctype_id', as: 'documentType' });

SubFolder.hasMany(SubFolder, {
  as: "children",
  foreignKey: "parent_folder_id"
});

SubFolder.belongsTo(SubFolder, {
  as: "parent",
  foreignKey: "parent_folder_id"
});

// 5. SubFolder <-> SubFolderItem
SubFolder.hasMany(SubFolderItem, { foreignKey: 'folder_id', as: 'items' });
SubFolderItem.belongsTo(SubFolder, { foreignKey: 'folder_id', as: 'subFolders' });

AcademicYear.belongsTo(DocumentType, {
  foreignKey: 'doctype_id'
});

DocumentType.hasMany(AcademicYear, {
  foreignKey: 'doctype_id'
});

Faculty.hasMany(Education, { foreignKey: 'faculty_id', as: 'education_background' });
Education.belongsTo(Faculty, { foreignKey: 'faculty_id' });

Faculty.hasMany(Training, { foreignKey: 'faculty_id', as: 'trainings' });
Training.belongsTo(Faculty, { foreignKey: 'faculty_id' });

Faculty.hasMany(Address, { foreignKey: 'person_id', as: 'address' });
Address.belongsTo(Faculty, { foreignKey: 'person_id' });

export default {
  sequelize,
  Students,
  User,
  UserRole,
  Documents,
  DocumentType,
  SubFolder,
  SubFolderItem,
  AcademicYear,
  Faculty,
  Training,
  Education
};