import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const activityremark = sequelize.define('activityremark', {
    remark_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quarter_id: {
       type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
     activity_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    remark: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'UserRole',
    timestamps: true,
    updatedAt: false
});

export default activityremark;