const { Crops } = require('../../db/Crops.js');

let addCropToInventory = async (cropId) => {
  return await Crops.query(`
    INSERT INTO tray_inventory (crop_id)
    VALUES (${cropId})
  `);
};

let getInventory = async () => {
  return await Crops.query(`
    SELECT id, crop_id FROM tray_inventory
  `);
};


module.exports = {
  addCropToInventory,
  getInventory
};