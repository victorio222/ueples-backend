import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const AnnouncementTarget = sequelize.define("AnnouncementTarget", {
    target_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    announcement_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Announcement",
            key: "announcement_id"
        }
    },
    campus_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Campuses",
            key: 'campus_id'
        }
    },
    college_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Colleges",
            key: "college_id"
        }
    },
    audience: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: "AnnouncementTarget",
    timestamps: true
});

export default AnnouncementTarget;