import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Notification = sequelize.define("Notification", {
    notification_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "User",
            key: "user_id"
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: "Notification",
    timestamps: true,
    createdAt: true,
    updatedAt: false
});

export default Notification;