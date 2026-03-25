import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Education = sequelize.define('Education', {
    education_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    faculty_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    level: {
        type: DataTypes.ENUM('Elem', 'Highschool', 'Tertiary', 'Post Baccalaureate', 'Graduate', 'Post Graduate'),
        allowNull: false
    },
    school_attended: { type: DataTypes.STRING(255), allowNull: false },
    year_graduated: { type: DataTypes.STRING(4), allowNull: false },
    honors_received: { type: DataTypes.STRING(255), allowNull: true }
}, {
    tableName: 'Education',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Education;