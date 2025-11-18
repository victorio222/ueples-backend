import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Endorsement = sequelize.define("Endorsement", {
    endorsement_id: {
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
    endorsedBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endorsementRole: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    remarks: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "Endorsement",
    timestamps: true,
    createdAt: "endorsementDate",
    updatedAt: false
});

export default Endorsement;