import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const ResearchTechInfo = sequelize.define("ResearchTechInfo", {
    techInfo_id: {
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
    rationale: {
        type: DataTypes.STRING,
        allowNull: false
    },
    methodology: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "ResearchTechInfo",
    timestamps: true
});

export default ResearchTechInfo;