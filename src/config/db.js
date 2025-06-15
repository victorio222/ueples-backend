import mysql from 'mysql2';

const dbConnection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: 'admin',
    database: 'smarthydroponic_db'
});

dbConnection.connect((err), () => {
    if(err) throw err
    console.log("Connected to MYSQL");
})

export default dbConnection;