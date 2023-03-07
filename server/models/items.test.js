//Connects to sequlize and the database!
const Sequelize = require('sequelize');
const { sequelize } = require('../db') //Connects to the database through index but can be done through directly connecting to './db.sqlite'

const Item = require('./items') //Gets the item model from 'items.js'


describe('Item Model', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Item', async () => {
        const testItem = await Item.create({ name: 'Television'})
        expect(testItem.name).toBe('Television')
    });
})