import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProposalFiles = sequelize.define("ProposalFiles", {
    file_id: {
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
            key: 'proposal_id'
        }
    },
    revision_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "RevisionHistory",
            key: 'revision_id'
        }
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "User",
            key: "user_id"
        }
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    versionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "ProposalFiles",
    timestamps: true,
    createdAt: "uploadDate"
})

export default ProposalFiles;