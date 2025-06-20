import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PlantStage = sequelize.define('PlantStage', {
    plant_stage_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    plant_stage_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    current_qty: {
        type: DataTypes.INTEGER(20),
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
     end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    transplant_id: {
        type: DataTypes.INTEGER(8),
        allowNull: false, 
        references: {
            model: 'PlantTransplant',
            key: 'transplant_id'
        }
    },
}, {
    tableName: 'PlantStage',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default PlantStage;