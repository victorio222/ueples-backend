import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PlantHarvest = sequelize.define('PlantHarvest', {
    harvest_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    harvest_qty: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    date_of_harvest: {
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
     is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'PlantHarvest',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default PlantHarvest;