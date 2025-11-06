import { Sequelize } from "sequelize";

const sequelize = new Sequelize('urds_db', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;