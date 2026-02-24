import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  middle_name: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  suffix_name: {
    type: DataTypes.STRING(5),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(50), // made 50 chars to be safer for emails
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone_number: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(100), // increase length for hashed passwords
    allowNull: true
  },
  user_image: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female'),
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive'),
    allowNull: false
  },
  remember_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  role_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  }
}, {
  tableName: 'User',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default User;
