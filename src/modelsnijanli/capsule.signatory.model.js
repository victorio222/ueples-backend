import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CapsuleSignatory = sequelize.define('CapsuleSignatory', {
    signatory_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    capsule_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
     name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
     positionRole: {
        type: DataTypes.STRING,
        allowNull: false
}, {
    tableName: 'CapsuleSignatory',
    timestamps: false
});

export default CapsuleSignatory;