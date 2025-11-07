import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Methodology = sequelize.define("ResearchObjectives", {
    methodology_id: {
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
    tableName: "Methodology",
    timestamps: true,
    updatedAt: false
});

export default Methodology;