import UserRole from "../models/userRole.model.js";

const seedRoles = async () => {
  const roles = [
    { role_name: "Principal" },
    { role_name: "Secretary" },
    { role_name: "Staff" },
  ];

  for (const role of roles) {
    await UserRole.findOrCreate({
      where: { role_name: role.role_name },
      defaults: role
    });
  }

  console.log("✅ Roles seeded successfully!");
};

export default seedRoles;
