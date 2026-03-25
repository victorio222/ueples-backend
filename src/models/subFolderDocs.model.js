import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const SubFolder = sequelize.define("SubFolder", {
  folder_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },

  doctype_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: "DocumentType",
      key: 'doctype_id'
    }
  },
  parent_folder_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  }

}, {
  tableName: "SubFolder",
  timestamps: true,
  paranoid: true
});

export default SubFolder;