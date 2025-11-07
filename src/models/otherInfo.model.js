import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const ResearchOtherInfo = sequelize.define("ResearchOtherInfo", {
    details_id: {
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
    sectionTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sectionContent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "ResearchOtherInfo",
    timestamps: true
});

export default ResearchOtherInfo;