import sequelize from '../config/db.js';
import AcademicYear from "./academicYear.model.js";
import Documents from "./documents.model.js";
import Students from "./students.model.js";
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

// 4. User <-> UserRole (Many-to-One)
User.belongsTo(UserRole, { foreignKey: 'role_id', as: 'role' });
UserRole.hasMany(User, { foreignKey: 'role_id', as: 'users' });

export default {
  sequelize,
  Students,
  User,
  UserRole,
  Documents,
  AcademicYear
};