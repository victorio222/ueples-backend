import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const RevisionHistory = sequelize.define("RevisionHistory", {
    revision_id: {
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
    versionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    natureOfWork: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    durationStart: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    durationEnd: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    budget: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    revisedBy: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "User",
            key: "user_id"
        }
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    file: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "RevisionHistory",
    timestamps: true,
    createdAt: "revisionDate",
    updatedAt: false
});

export default RevisionHistory;