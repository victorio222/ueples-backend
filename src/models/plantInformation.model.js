import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PlantInformation = sequelize.define('PlantInformation', {
    plant_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    plant_name: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    species_family: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    soil_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    days_till_harvest: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    plant_type: {
        type: DataTypes.ENUM('Vegetable', 'Fruit', 'Herb', 'Flower'),
        allowNull: true
    },
    plant_image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    plant_row_spacing: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    date_planted: {
        type: DataTypes.DATEONLY,
    }
}, {
    tableName: 'PlantInformation',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default PlantInformation;