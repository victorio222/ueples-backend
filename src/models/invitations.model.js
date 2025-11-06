// models/invitation.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Invitation = sequelize.define('Invitation', {
  invitation_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { isEmail: true }
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.STRING(50), // e.g., 'faculty_researcher', 'senior_researcher'
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'expired'),
    defaultValue: 'pending'
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Invitations',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Invitation;
