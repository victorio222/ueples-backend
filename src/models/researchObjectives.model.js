import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const ResearchObjectives = sequelize.define("ResearchObjectives", {
    objective_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
    },
    proposal_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Proposals",
            key: "proposal_id"
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "ResearchObjectives",
    timestamps: true,
    updatedAt: false
});

export default ResearchObjectives;