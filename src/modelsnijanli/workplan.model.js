import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const workplan = sequelize.define('workplan', {
    workplan_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
         references: {
            model: "Proposal",
            key: "proposal_id"
        }
    }

}, {
    tableName: 'workplan',
    timestamps: false
});

export default workplan;