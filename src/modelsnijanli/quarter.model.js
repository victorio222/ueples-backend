import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const quarter = sequelize.define('quater', {
    quarter_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quarterNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'quarter',
    timestamps: false
});

export default quarter;