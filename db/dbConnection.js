const Sequelize = require("sequelize");
require('dotenv').config();// you NEED this to get env vars
const sequelize = new Sequelize(//take from env variables.
process.env.DB_DBNAME,
process.env.DB_USERNAME,
 process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
modules.export=dbConnection