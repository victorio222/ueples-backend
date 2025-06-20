import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const SensorReadings = sequelize.define('SensorReadings', {
    reading_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    reading_value: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sensor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Sensors',
            key: 'sensor_id'
        }
    },
    hydromodel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'HydroponicModel',
            key: 'hydromodel_id'
        }
    },
}, {
    tableName: 'SensorReadings',
    timestamps: true,
    createdAt: 'record_date',
    updatedAt: false
});

export default SensorReadings;