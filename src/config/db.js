import { Sequelize } from "sequelize";

const sequelize = new Sequelize('uep_student_archives', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;






// import { Sequelize } from "sequelize";
// import 'dotenv/config';

// const sequelize = new Sequelize(
//   process.env.DB_NAME || 'uep_student_archives',
//   process.env.DB_USER || 'root',
//   process.env.DB_PASSWORD || 'admin',
//   {
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'mysql',
//     logging: false, // Set to console.log during debugging to see SQL queries
//     pool: {
//       max: 5,        // Maximum number of connections in pool
//       min: 0,        // Minimum number of connections in pool
//       acquire: 30000, // Maximum time (ms) to get a connection before throwing error
//       idle: 10000    // Time (ms) a connection can be idle before being released
//     }
//   }
// );

// export default sequelize;