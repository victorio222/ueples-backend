import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const UserRole = sequelize.define('UserRole', {
    role_id: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'UserRole',
    timestamps: false
});

export default UserRole;