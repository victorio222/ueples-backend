import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const financialcomponent = sequelize.define('financialcomponent', {
   financialcomponent_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proposal_id: {
          type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    grandTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
}, 
    tableName: 'financialcomponent',
    timestamps: false
});

export default financialcomponent;