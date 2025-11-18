import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CapsuleResearchProposal = sequelize.define('CapsuleResearchProposal', {
    capsule_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
     endorsement_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
        }
    },
   
 {
    tableName: 'CapsuleResearchProposal',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default CapsuleResearchProposal;
