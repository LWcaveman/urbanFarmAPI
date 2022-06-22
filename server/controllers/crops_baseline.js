const { Crops } = require('../../db/Crops.js');

let getAllCrops = async () => {
  return await Crops.query(`
  Select crop_name, id from crops_baseline
  `)
}

module.exports = {
  getAllCrops
}