import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const DocumentType = sequelize.define('DocumentType', {
    doctype_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'DocumentType',
    timestamps: true,
});

export default DocumentType;
