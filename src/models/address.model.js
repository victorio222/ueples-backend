import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Address = sequelize.define('Address', {
    address_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    person_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    house_number: { type: DataTypes.STRING(255), allowNull: true },
    street: { type: DataTypes.STRING(255), allowNull: true },
    barangay: { type: DataTypes.STRING(255), allowNull: false },
    municipality: { type: DataTypes.STRING(100), allowNull: false },
    province: { type: DataTypes.STRING(100), allowNull: false },
    country: { type: DataTypes.STRING(100), allowNull: false }
}, {
    tableName: 'Address',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Address;