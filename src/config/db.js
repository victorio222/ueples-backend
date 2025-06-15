// import mysql from 'mysql2';

// const dbConnection = mysql.createConnection({
//     host: 'localhost',
//     username: 'root',
//     password: 'admin',
//     database: 'smarthydroponic_db'
// });

// dbConnection.connect((err), () => {
//     if(err) throw err
//     console.log("Connected to MYSQL");
// })

// export default dbConnection;




import { Sequelize } from "sequelize";

const sequelize = new Sequelize('smarthydroponic_db', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;