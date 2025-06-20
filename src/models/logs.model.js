import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Logs = sequelize.define('Logs', {
    log_id: {
        type: DataTypes.INTEGER(8),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    log_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event_desc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    severity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    module: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'user_id'
        }
    },
}, {
    tableName: 'Logs',
    timestamps: true,
    createdAt: 'timestamp',
    updatedAt: false
});

export default Logs;