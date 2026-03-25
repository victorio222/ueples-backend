import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Training = sequelize.define('Training', {
    training_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    faculty_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    title: { type: DataTypes.STRING(255), allowNull: false },
    duration_venue: { type: DataTypes.STRING(255), allowNull: false },
    sponsoring_agency: { type: DataTypes.STRING(255), allowNull: false },
    participation: { type: DataTypes.STRING(100), allowNull: false }
}, {
    tableName: 'Training',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Training;