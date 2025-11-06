import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Campuses = sequelize.define('Campuses', {
    campus_id: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    campus_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'Campuses',
    timestamps: true,
    createdAt: 'created_at',
});

export default Campuses;