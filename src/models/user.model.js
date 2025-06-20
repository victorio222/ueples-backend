import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
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
    type: DataTypes.STRING(100),
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
  //   email_verified_at: {
  //     type: DataTypes.DATE,
  //     allowNull: true
  //   },
  password: {
    type: DataTypes.STRING(250),
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
    type: DataTypes.ENUM('Active', 'Inactive'),
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
    type: DataTypes.STRING,
    allowNull: true
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }

}, {
  tableName: 'User',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default User;