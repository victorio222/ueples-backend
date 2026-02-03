"use strict";

export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert("Campuses", [
    {
      campus_id: 1,
      campus_name: "UEP Main Campus",
      location: "Catarman, Northern Samar",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      campus_id: 2,
      campus_name: "UEP Laoang Campus",
      location: "Laoang, Northern Samar",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      campus_id: 3,
      campus_name: "UEP PRMC Campus",
      location: "Catarman, Northern Samar",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      campus_id: 4,
      campus_name: "UEP Catarman Campus",
      location: "Catarman, Northern Samar",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      campus_id: 5,
      campus_name: "UEP San Jose Campus",
      location: "San Jose, Northern Samar",
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete("Campuses", null, {});
}
