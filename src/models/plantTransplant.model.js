import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PlantTransplant = sequelize.define('PlantTransplant', {
    transplant_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    initial_qty: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    transplant_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false
    },
    hydromodel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'HydroponicModel',
            key: 'hydromodel_id'
        }
    },
     is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'PlantTransplant'
});

export default PlantTransplant;