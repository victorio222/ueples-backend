import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Proposals = sequelize.define("Proposals", {
    proposal_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    announcement_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'Announcement',
            key: "announcement_id"
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commodity: {
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
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    versionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    approvedDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    submissionDate: {
        type: DataTypes.Date,
        allowNull: false
    }
}, {
    tableName: "Proposals",
    timestamps: true,
});

export default Proposals;