const express = require("express")
const { db } = require("./server/models");
const app = express();
const { itemRouter } = require("./server/routes/item")
const path = require("path");
const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    //express routes and requests
    app.use(express.json())

    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname+'/public/index.html'));
    });

    app.use('/item', itemRouter);
    
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
