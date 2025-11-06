// import User from "./user.model.js";
// import Reports from "./reports.model.js";
// import Logs from "./logs.model.js";
// import Colleges from "./colleges.model.js";
// import Campuses from "./campuses.model.js";
// import UserRole from "./userRole.model.js";

// Campuses.hasMany(User, {
//     foreignKey: 'campus_id',
//     onDelete: 'CASCADE'
// });

// User.belongsTo(Campuses, {
//     foreignKey: 'campus_id'
// })

// User.hasOne(Colleges, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Colleges.belongsTo(User, {
//     foreignKey: 'user_id'
// })

// User.hasMany(UserRole, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// UserRole.belongsTo(User, {
//     foreignKey: 'user_id'
// })

// User.hasMany(Logs, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Logs.belongsTo(User, {
//     foreignKey: 'user_id'
// });



// export default {
//     User,
//     Reports,
//     Logs,
// }










import User from "./user.model.js";
import Reports from "./reports.model.js";
import Logs from "./logs.model.js";
import Colleges from "./colleges.model.js";
import Campuses from "./campuses.model.js";
import UserRole from "./userRole.model.js";

// Campus 1 --- * User
Campuses.hasMany(User, {
    foreignKey: 'campus_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
User.belongsTo(Campuses, {
    foreignKey: 'campus_id',
});

// Campus 1 --- * Colleges
Campuses.hasMany(Colleges, {
    foreignKey: 'campus_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Colleges.belongsTo(Campuses, {
    foreignKey: 'campus_id',
    as: 'campus'
});

// User 1 --- * Colleges (Dean)
User.hasMany(Colleges, {
    foreignKey: 'col_dean_id',
    as: 'CollegesAsDean',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Colleges.belongsTo(User, {
    foreignKey: 'col_dean_id',
    as: 'Dean'
});

// User 1 --- * Colleges (Coordinator)
User.hasMany(Colleges, {
    foreignKey: 'col_coordinator_id',
    as: 'CollegesAsCoordinator',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Colleges.belongsTo(User, {
    foreignKey: 'col_coordinator_id',
    as: 'Coordinator'
});

// User 1 --- * Logs
User.hasMany(Logs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Logs.belongsTo(User, {
    foreignKey: 'user_id'
});

// User 1 --- * UserRole
User.hasMany(UserRole, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
UserRole.belongsTo(User, {
    foreignKey: 'user_id'
});

export default {
    User,
    Reports,
    Logs,
    Colleges,
    Campuses,
    UserRole
};
