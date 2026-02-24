import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Documents = sequelize.define("Documents", {
    document_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
    student_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "Students",
            key: 'student_id'
        }
    },
    posted_by: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "User",
            key: 'user_id'
        }
    },
    year_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "AcademicYear",
            key: 'year_id'
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    attachment: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "Documents",
    timestamps: true,
});

export default Documents;