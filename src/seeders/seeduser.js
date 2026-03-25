import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const seedUsers = async () => {
  // Hash the password once to keep the process fast
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("password123", saltRounds);

  const users = [
    {
      first_name: "Admin",
      last_name: "User",
      email: "admin@uep.edu.ph",
      phone_number: "09123456789",
      password: hashedPassword,
      gender: "Male",
      status: "Active",
      role_id: 1 // Matches 'Admin' in your role seeder
    },
    {
      first_name: "Jane",
      last_name: "Secretary",
      email: "secretary@uep.edu.ph",
      phone_number: "09223334444",
      password: hashedPassword,
      gender: "Female",
      status: "Active",
      role_id: 2 // Matches 'Secretary'
    },
    {
      first_name: "John",
      last_name: "Staff",
      email: "staff@uep.edu.ph",
      phone_number: "09334445555",
      password: hashedPassword,
      gender: "Male",
      status: "Active",
      role_id: 3 // Matches 'Staff'
    }
  ];

  try {
    for (const user of users) {
      // Use email as the unique identifier to prevent duplicates
      await User.findOrCreate({
        where: { email: user.email },
        defaults: user
      });
    }
    console.log("✅ User table seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding User table:", error);
  }
};

export default seedUsers;