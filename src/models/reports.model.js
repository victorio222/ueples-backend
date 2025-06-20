import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Reports = sequelize.define('Reports', {
    report_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    report_title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    file_location: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'Reports',
    timestamps: true,
    createdAt: 'report_date',
    updatedAt: false
});

export default Reports;