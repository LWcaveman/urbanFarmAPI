require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const { getAllCrops } = require('./controllers/crops_baseline.js'); 
const { addCropToInventory, getInventory } = require('./controllers/tray_inventory.js'); 


app.get('/crops', (req, res) => {
  getAllCrops().then(data => {
    res.status(200).send(data.rows);
  });
});

app.get('/inventory', (req, res) => {
  getInventory().then((data) => {
    res.status(200).send(data.rows);
  });
});

app.post('/tray/:id', (req, res) => {
  addCropToInventory(req.params.id)
  .then((data) => {
    res.status(201).send(`updated Inventory`);
  });
});





console.log(`Listening on PORT ${process.env.PORT}`);
app.listen(process.env.PORT);