import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const evaluation = sequelize.define('evaluation', {
    evaluation_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    evaluator_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    evaluationDate: {
        type: DataTypes.STRING,
        allowNull: false
     },
    venue: {
        type: DataTypes.STRING,
        allowNull: false
     },
    status: {
        type: DataTypes.STRING,
        allowNull: false
     },
    
}, {
    tableName: 'UserRole',
    timestamps: false
});

export default evaluation;