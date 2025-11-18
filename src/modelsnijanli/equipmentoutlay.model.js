import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const equipmentoutlay = sequelize.define('equipmentoutlay', {
    equipment_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
       type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
     },
    dataEntry: {
        type: DataTypes.DATE,
        allowNull: false
    },  
    itemDescription: {
        type: DataTypes.STRING,
        allowNull: false
     },
    purpose: {
        type: DataTypes.STRING,
        allowNull: false
     },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
     },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unitCost: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    estimatedCost: {
        type: DataTypes.DECIMAL,
        allowNull: false

    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false

    },
    tableName: 'equipmentoutlay',
    timestamps: false
});

export default equipmentoutlay;