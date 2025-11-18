// import { DataTypes } from 'sequelize';
// import sequelize from '../config/db.js';

// const User = sequelize.define('User', {
//   user_id: {
//     type: DataTypes.BIGINT.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   first_name: {
//     type: DataTypes.STRING(20),
//     allowNull: false
//   },
//   last_name: {
//     type: DataTypes.STRING(20),
//     allowNull: false
//   },
//   middle_name: {
//     type: DataTypes.STRING(20),
//     allowNull: true
//   },
//   suffix_name: {
//     type: DataTypes.STRING(5),
//     allowNull: true
//   },
//   birthdate: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING(20),
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true
//     }
//   },
//   phone_number: {
//     type: DataTypes.STRING(20),
//     allowNull: true
//   },
//   password: {
//     type: DataTypes.STRING(20),
//     allowNull: false
//   },
//   user_image: {
//     type: DataTypes.STRING(50),
//     allowNull: true
//   },
//   gender: {
//     type: DataTypes.ENUM('Male', 'Female'),
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.ENUM('Active', 'Inactive'),
//     allowNull: false
//   },
//   remember_token: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },
//   isOnline: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
//   },
//   last_active: {
//     type: DataTypes.TIME,
//     allowNull: false
//   },
//   college_id: {
//     type: DataTypes.BIGINT.UNSIGNED,
//     allowNull: false,
//     references: {
//       model: 'Colleges',
//       key: 'college_id'
//     }
//   },
//   campus_id: {
//     type: DataTypes.BIGINT.UNSIGNED,
//     allowNull: false,
//     references: {
//       model: 'Campuses',
//       key: 'campus_id'
//     }
//   }, 
//   role_id: {
//     type: DataTypes.BIGINT.UNSIGNED,
//     allowNull: false,
//     references: {
//       model: 'UserRole',
//       key: 'role_id'
//     }
//   }
// }, {
//   tableName: 'User',
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: 'updated_at'
// });

// export default User;









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
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
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
    type: DataTypes.ENUM('Approved', 'Rejected', 'Pending', 'Invited'),
    allowNull: false
  },
  remember_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  isOnline: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  last_active: {
    type: DataTypes.TIME,
    allowNull: false
  },
  college_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  campus_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  }, 
  role_id: {
    type: DataTypes.BIGINT.UNSIGNED
  }
}, {
  tableName: 'User',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default User;
