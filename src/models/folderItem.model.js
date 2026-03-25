import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const SubFolderItem = sequelize.define('SubFolderItem', {
    file_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    folder_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    file_attachment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uploaded_by: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: "User",
            key: 'user_id'
        }
    },
}, {
    tableName: 'SubFolderItem',
    timestamps: true,
    paranoid: true
});

export default SubFolderItem;
