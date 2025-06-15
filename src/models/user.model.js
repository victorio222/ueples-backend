import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  middle_name: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  extension_name: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone_number: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  id_card: {
    type: DataTypes.TEXT('medium'),
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive'), // You can adjust options based on your logic
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Staff', 'Farmer', 'Student'),
    allowNull: false
  },
  remember_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  user_image: {
    type: DataTypes.STRING, // You can add length if needed
    allowNull: true
  },
}, {
  tableName: 'User',
  timestamps: true, // automatically maps `createdAt` and `updatedAt`
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default User;