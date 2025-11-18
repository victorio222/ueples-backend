import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const mooecategory = sequelize.define('mooecategory', {
    mooecategory_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    categoryname: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'mooecategory',
    timestamps: false
});

export default mooecategory;