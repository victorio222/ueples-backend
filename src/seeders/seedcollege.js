"use strict";

export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert("Colleges", [
    {
      college_id: 1,
      college_name: "College of Law",
      campus_id: 1,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 2,
      college_name: "College of Engineering",
      campus_id: 1,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 3,
      college_name: "College of Science",
      campus_id: 1,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 4,
      college_name: "College of Education",
      campus_id: 2, 
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 5,
      college_name: "College of Nursing",
      campus_id: 3,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 6,
      college_name: "College of Business Administration",
      campus_id: 1,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 7,
      college_name: "College of Arts and Communication",
      campus_id: 2,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 8,
      college_name: "College of Agriculture, Fisheries, and Forestry",
      campus_id: 1,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      college_id: 9,
      college_name: "Graduate Studies",
      campus_id: 1,
      col_dean_id: null,
      col_coordinator_id: null,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete("Colleges", null, {});
}
