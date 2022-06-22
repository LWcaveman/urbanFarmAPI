const { Crops } = require('../../db/Crops.js');

let getAllCrops = async () => {
  return await Crops.query(`
  Select * from crops_baseline
  `)
}

module.exports = {
  getAllCrops
}