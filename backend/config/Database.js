import {Sequelize} from "sequelize";

const db = new Sequelize('auth_node','root','password',{
    host: "localhost",
    dialect: "mysql",
    sync: true
});

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

export default db;