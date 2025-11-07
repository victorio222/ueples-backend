import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const TeamMembers = sequelize.define("TeamMembers", {
    team_id: {
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
    member_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: "User",
            key: "user_id"
        }
    }
}, {
    tableName: "TeamMembers",
    timestamps: true
});