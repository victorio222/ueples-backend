import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Students = sequelize.define("Students", {
    student_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    lrn: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            len: [12, 12]
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    extension_name: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    profile_image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "/images/user/default-student.jpg"
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false
    }
}, {
    tableName: "Students",
    timestamps: true,
    getterMethods: {
        fullName() {
            return `${this.first_name} ${this.last_name}`;
        }
    }
});

export default Students;