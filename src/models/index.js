import User from "./user.model.js";
import Reports from "./reports.model.js";
import Logs from "./logs.model.js";
import Colleges from "./colleges.model.js";
import Campuses from "./campuses.model.js";
import UserRole from "./userRole.model.js";

/* ────────────────────────────────
   🏫 Campus 1 --- * User
──────────────────────────────── */
Campuses.hasMany(User, {
  foreignKey: "campus_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.belongsTo(Campuses, {
  foreignKey: "campus_id",
  as: "campus",
});

/* ────────────────────────────────
   🏫 Campus 1 --- * College
──────────────────────────────── */
Campuses.hasMany(Colleges, {
  foreignKey: "campus_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Colleges.belongsTo(Campuses, {
  foreignKey: "campus_id",
  as: "campus",
});

/* ────────────────────────────────
   🧑‍🏫 User (Dean) 1 --- * Colleges
──────────────────────────────── */
User.hasMany(Colleges, {
  foreignKey: "col_dean_id",
  as: "dean_colleges",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Colleges.belongsTo(User, {
  foreignKey: "col_dean_id",
  as: "dean",
});

/* ────────────────────────────────
   🧑‍💼 User (Coordinator) 1 --- * Colleges
──────────────────────────────── */
User.hasMany(Colleges, {
  foreignKey: "col_coordinator_id",
  as: "coordinator_colleges",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Colleges.belongsTo(User, {
  foreignKey: "col_coordinator_id",
  as: "coordinator",
});

/* ────────────────────────────────
   🧾 User 1 --- * Logs
──────────────────────────────── */
User.hasMany(Logs, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Logs.belongsTo(User, {
  foreignKey: "user_id",
});

/* ────────────────────────────────
   🧩 UserRole 1 --- * Users
   (Each user has one role)
──────────────────────────────── */
User.belongsTo(UserRole, {
  foreignKey: "role_id",
  as: "role",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
UserRole.hasMany(User, {
  foreignKey: "role_id",
});

export default {
  User,
  Reports,
  Logs,
  Colleges,
  Campuses,
  UserRole,
};
