const { Crops } = require('../../db/Crops.js');

let addCropToInventory = async (cropId, date) => {
  return await Crops.query(`
    INSERT INTO tray_inventory (crop_id, date_planted)
    VALUES (${cropId}, '${date}')
  `);
};

let updateCropToInventory = async (trayId, date, cropId) => {
  console.log('IN CONTROLLER ',trayId, date, cropId)
  return await Crops.query(`
    UPDATE tray_inventory 
    SET crop_id = ${cropId},
        date_planted ='${date}'
    WHERE id = ${trayId}
  `);
};

let getInventory = async () => {
  return await Crops.query(`
    SELECT * FROM tray_inventory
    ORDER BY id
  `);
};

let deleteCropInventory = async (trayId) => {
  return await Crops.query(`
  DELETE FROM tray_inventory
  WHERE id = ${trayId}
`);
};

module.exports = {
  addCropToInventory,
  getInventory, 
  updateCropToInventory,
  deleteCropInventory 
};