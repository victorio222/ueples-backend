import UserRole from "../models/userRole.model.js";

const seedRoles = async () => {
  const roles = [
    { role_name: "URDS Director" },
    { role_name: "URDS Staff" },
    { role_name: "College Coordinator" },
    { role_name: "Faculty Researcher" },
    { role_name: "Senior Faculty Researcher" },
    { role_name: "Researcher" }
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
