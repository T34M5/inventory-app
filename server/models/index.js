const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = require('./items')

module.exports = {
  sequelize,
  Item
};
