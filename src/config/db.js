import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('uep_student_archives', 'root', 'admin', {
//     host: 'localhost',
//     dialect: 'mysql'
// })

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: 'true',
                rejectUnauthorized: false
            }
        },
        logging: false
    }
);

export default sequelize;