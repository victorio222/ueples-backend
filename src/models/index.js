import User from "./user.model.js";
import Reports from "./reports.model.js";
import Logs from "./logs.model.js";
import Colleges from "./colleges.model.js";
import Campuses from "./campuses.model.js";
import UserRole from "./userRole.model.js";

User.hasOne(Campuses, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Campuses.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasOne(Colleges, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Colleges.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(UserRole, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

UserRole.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Logs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Logs.belongsTo(User, {
    foreignKey: 'user_id'
});



export default {
    User,
    Reports,
    Logs,
}