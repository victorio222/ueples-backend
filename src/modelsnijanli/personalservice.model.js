import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const personalservice = sequelize.define('personalservice', {
    ps_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
     },
    description: {
        type: DataTypes.STRING,
        allowNull: false
     },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false
}, 
    tableName: 'personalservice',
    timestamps: false
});

export default personalservice;