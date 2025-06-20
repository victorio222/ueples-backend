import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CropSeasons = sequelize.define('CropSeasons', {
    season_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    season_type: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    season_start: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
     season_end: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    plant_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'PlantInformation',
            key: 'plant_id'
        }
    },
});

export default CropSeasons;