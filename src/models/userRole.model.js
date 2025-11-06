import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserRole = sequelize.define('UserRole', {
    role_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'UserRole',
    timestamps: false
});

export default UserRole;