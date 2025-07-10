import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const HydroponicModel = sequelize.define('HydroponicModel', {
    hydromodel_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    hydromodel_name: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    num_of_plants: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    hydromodel_image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'PlantInformation',
            key: 'plant_id'
        }
    },
     is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'HydroponicModel',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default HydroponicModel;