import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ActivitiesWorkplan = sequelize.define('ActivitiesWorkplan', {
    activity_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    workplan_id_name: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    }, description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'ActivitiesWorkplan',
    timestamps: false
});

export default ActivitiesWorkplan;