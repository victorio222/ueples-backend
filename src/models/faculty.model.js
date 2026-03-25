import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Faculty = sequelize.define('Faculty', {
  faculty_id: {
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
  sex: {
    type: DataTypes.ENUM('Male', 'Female'),
    allowNull: true
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  birthplace: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  religion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive'),
    allowNull: false
  },
  remember_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  role: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
    // defaultValue: "Faculty"
  }
}, {
  tableName: 'Faculty',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Faculty;
