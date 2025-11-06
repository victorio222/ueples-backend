import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Colleges = sequelize.define('Colleges', {
    college_id: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    college_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    campus_id: {
        type: DataTypes.BIGINT(10),
        allowNull: false,
        references: {
            model: 'Campuses',
            key: 'campus_id'
        }
    },
    col_dean_id: {
        type: DataTypes.BIGINT(10),
        allowNull: false,
        references: {
            model: 'User',
            key: 'user_id'
        }
    },
    col_coordinator_id: {
        type: DataTypes.BIGINT(10),
        allownNull: false,
        references: {
            model: 'User',
            key: 'user_id'
        }
    }
}, {
    tableName: 'Colleges',
    timestamps: true,
    created_at: 'created_at'
});

export default Colleges;