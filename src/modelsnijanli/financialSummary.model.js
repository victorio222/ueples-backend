import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const summary_id = sequelize.define("summary_id", {
    summary_id: {
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
    },
    personalServiceTotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    equipmentOutlayTotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    grandTotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
}, {
    tableName: "FinancialSummary",
    timestamps: true,
    createdAt: true,
    updatedAt: false
});

export default FinancialSummary;