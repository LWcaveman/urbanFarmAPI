const Pool = require('pg').Pool;
require('dotenv').config(); 


const Crops = new Pool({
  user: 'levi',
  host: 'localhost',
  database: 'crops',
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = {
  Crops
};
