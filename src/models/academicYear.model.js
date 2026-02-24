import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const AcademicYear = sequelize.define('AcademicYear', {
    year_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    academic_year: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'AcademicYear',
    timestamps: true,
});

export default AcademicYear;
