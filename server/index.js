require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const { getAllCrops } = require('./controllers/crops_baseline.js'); 
const { addCropToInventory, 
        getInventory, 
        updateCropToInventory,
        deleteCropInventory  } = require('./controllers/tray_inventory.js'); 

app.use(express.json());


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

//the id here represents a crop id
app.post('/tray/:id', (req, res) => {
  addCropToInventory(req.params.id, req.body.date)
   .then((data) => {
    res.status(201).send(`updated Inventory`);
  }).catch(err => console.log(err)); 
});

//the id here represents a tray id
app.put('/tray/:id', (req, res) => {
  console.log('Put: ',req.params.id, req.body.date, req.body.crop_id)
  updateCropToInventory(req.params.id, req.body.date, req.body.crop_id)
   .then((data) => {
    res.status(201).send(`updated Inventory`);
  }).catch(err => console.log(err)); 
});

//this is currently only useful in dev
app.delete(`/tray/:id`, (req, res) => {
  console.log('Delete: ',req.params.id)
  deleteCropInventory(req.params.id)
   .then((data) => {
    res.status(201).send(`updated Inventory`);
  }).catch(err => console.log(err)); 
});



console.log(`Listening on PORT ${process.env.PORT}`);
app.listen(process.env.PORT);