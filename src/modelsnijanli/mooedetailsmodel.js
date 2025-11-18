import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const mooedetails = sequelize.define('mooedetails', {
    mooe_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
      type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    mooecategory_id: {
             type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    }, 
    dataentry: {
        type: DataTypes.DATE,
        allowNull: false
   }, 
    itemdescription: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    purpose: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    unitcost: {
        type: DataTypes.DECIMAL,
        allowNull: false
     }, 
    estimatedcost: {
        type: DataTypes.DECIMAL,
        allowNull: false
     }, 
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },   
    tableName: 'mooedetails',
    timestamps: false
});

export default mooedetails;