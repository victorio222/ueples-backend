import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Sensors = sequelize.define('Sensors', {
    sensor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    sensor_name: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    sensor_desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sensor_image: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Sensors',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Sensors;