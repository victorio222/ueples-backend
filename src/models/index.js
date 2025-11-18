import User from "./user.model.js";
import Reports from "./reports.model.js";
import Logs from "./logs.model.js";
import Colleges from "./colleges.model.js";
import Campuses from "./campuses.model.js";
import UserRole from "./userRole.model.js";
import Announcement from "./announcement.model.js";
import AnnouncementTarget from "./announcementTarget.model.js";
import Proposals from "./proposals.model.js";
import ProposalFiles from "./proposalFiles.model.js";
import Revisions from "./revision.model.js";
import Notification from "./notification.model.js";

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

/* ────────────────────────────────
   Announcement --- AnnouncementTarget
──────────────────────────────── */

Announcement.hasMany(AnnouncementTarget, {
  foreignKey: "announcement_id",
  sourceKey: "announcement_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "targets"
});

AnnouncementTarget.belongsTo(Announcement, {
  foreignKey: "announcement_id",
  targetKey: "announcement_id",
  as: "announcement"
});


/* ────────────────────────────────
   Proposals --- Announcement
──────────────────────────────── */

Proposals.belongsTo(Announcement, {
  foreignKey: "announcement_id",
  targetKey: "announcement_id",
  as: "announcement"
});

Announcement.hasMany(Proposals, {
  foreignKey: "announcement_id",
  targetKey: "announcement_id",
  as: "proposals"
})

/* ────────────────────────────────
   Proposals --- Proposal Files
──────────────────────────────── */

ProposalFiles.belongsTo(Proposals, {
    foreignKey: "proposal_id",
    targetKey: "proposal_id",
    as: "proposal"
});

Proposals.hasMany(ProposalFiles, {
    foreignKey: "proposal_id",
    sourceKey: "proposal_id",
    as: "files"
});

/* ────────────────────────────────
   Proposal Files --- Revisions
──────────────────────────────── */

ProposalFiles.belongsTo(Revisions, {
    foreignKey: "revision_id",
    targetKey: "revision_id",
    as: "revision"
});

Revisions.hasMany(ProposalFiles, {
    foreignKey: "revision_id",
    sourceKey: "revision_id",
    as: "files"
});

/* ────────────────────────────────
   Proposal Files --- User
──────────────────────────────── */

ProposalFiles.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "user_id",
    as: "uploader"
});

User.hasMany(ProposalFiles, {
    foreignKey: "user_id",
    sourceKey: "user_id",
    as: "uploadedFiles"
});

/* ────────────────────────────────
   User --- Notifications
──────────────────────────────── */

User.hasMany(Notification, {
    foreignKey: "user_id",
    sourceKey: "user_id",
    as: "notifications",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Notification.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "user_id",
    as: "user"
});

export default {
  User,
  Reports,
  Logs,
  Colleges,
  Campuses,
  UserRole,
  Announcement,
  AnnouncementTarget,
  Proposals,
  Notification
};
