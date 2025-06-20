import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PlantRequirements = sequelize.define('PlantRequirements', {
    plantreq_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    min_lux: {
        type: DataTypes.INTEGER(4)
    },
    max_lux: {
        type: DataTypes.INTEGER(4)
    },
    min_humidity: {
        type: DataTypes.FLOAT(8)
    },
    max_humidity: {
        type: DataTypes.FLOAT(8)
    },
    min_temperature: {
        type: DataTypes.FLOAT(8)
    },
    max_temperature: {
        type: DataTypes.FLOAT(8)
    },
    min_ppm: {
        type: DataTypes.INTEGER(4)
    },
    max_ppm: {
        type: DataTypes.INTEGER(4)
    },
    min_ph: {
        type: DataTypes.FLOAT(8)
    },
    max_ph: {
        type: DataTypes.FLOAT(8)
    },
    min_water_temperature: {
        type: DataTypes.FLOAT(8)
    },
    max_water_temperature: {
        type: DataTypes.FLOAT(8)
    },
    plant_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'PlantInformation',
            key: 'plant_id'
        }
    },
}, {
    tableName: 'PlantRequirements',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default PlantRequirements;