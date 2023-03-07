//Connects to sequlize and the database!
const Sequelize = require('sequelize');
const { sequelize } = require('../db') //Connects to the database through index but can be done through directly connecting to './db.sqlite'

//Defines Item Model 
const Item = sequelize.define('Item', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT,
    category: Sequelize.STRING,
    image: Sequelize.STRING
})
//Exports Item Model
module.exports = Item