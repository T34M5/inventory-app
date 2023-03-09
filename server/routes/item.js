const express = require("express");
const itemRouter = express.Router();
const { Item } = require("../models");

// GET all items
itemRouter.get("/all", async (req, res) => {
  try {
    const allItems = await Item.findAll();
    res.send(allItems);
  } catch (error) {
    console.log(error);
  }
});

//GET individual item
itemRouter.get("/:name", async (req, res) => {
  try {
    const oneItem = await Item.findAll({
      where: {
        title: req.params.name
      }
    });
    res.send(oneItem);
  } catch (error) {
    console.log(error);
  }
})

//POST to add a new item
itemRouter.post('/new', async (req, res) => {
  try {
    await Item.create(req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
})

//DELETE an item
itemRouter.delete('/:name', async (req, res) => {
  try {
    await Item.delete({
      where: {
        name: req.params.name
      }
    });
    res.send("");
  } catch (error) {
    console.log(error);
  }
})

//PUT to update item
itemRouter.put('/:name', async (req, res) => {
  try {
    await Item.update(req.body, {
      where: {
        name: req.params.name
      }
    });
    res.send("");
  } catch (error) {
    console.log(error);
  }
})
module.exports = { itemRouter };
