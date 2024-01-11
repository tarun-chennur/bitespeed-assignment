import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
    id:DataTypes.INTEGER,                  
    phoneNumber:DataTypes.STRING,
    email: DataTypes.STRING,
    linkedId:DataTypes.INTEGER,
    linkPrecedence: DataTypes.STRING,
    createdAt:DataTypes.TIMESTAMP,             
    updatedAt:DataTypes.TIMESTAMP,              
    deletedAt:DataTypes.TIMESTAMP,
});

module.exports=User