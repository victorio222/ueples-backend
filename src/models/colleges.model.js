import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Colleges = sequelize.define('Colleges', {
    college_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    college_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    campus_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'Campuses',
            key: 'campus_id'
        }
    },
    col_dean_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'User',
            key: 'user_id'
        }
    },
    col_coordinator_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'User',
            key: 'user_id'
        }
    }
}, {
    tableName: 'Colleges',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Colleges;
