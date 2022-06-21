require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();

app.get('/crops', (req, res) => {
  
  res.send('Oh Ya a Backend Too')
})



console.log(`Listening on PORT ${process.env.PORT}`);
app.listen(process.env.PORT);