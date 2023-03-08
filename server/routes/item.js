const express = require("express");
const item = express.Router();
const { Item } = require("../models");

// GET all items
item.get("/all", async (req, res) => {
  try {
    const allItems = await Item.findAll();
    res.send(allItems);
  } catch (error) {
    console.log(error);
  }
});

//GET individual item
item.get("/:name", async (req, res) => {
  try {
    const oneItem = await Item.findAll({
      where: {
        name: req.params.name
      }
    });
    res.send(oneItem);
  } catch (error) {
    console.log(error);
  }
})

//POST to add a new item
item.post('/new', async (req, res) => {
  const newItem = await Item.create(req.body);
  res.send(newItem);
})

//DELETE an item
item.delete('/:name', async (req, res) => {
  await Item.delete({
    where: {
      name: req.params.name
    }
  });
  res.send("");
})

//PUT to update item
item.put('/:name', async (req, res) => {
  
})

module.exports = item;
