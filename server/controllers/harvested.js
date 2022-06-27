const { Crops } = require('../../db/Crops.js');

let getHarvested = async () => {
  return await Crops.query(`
    SELECT * FROM harvested
  `);
};

let addHarvested = async (cropId, cropName) => {
  return await Crops.query(`
    INSERT INTO harvested(crop_id, crop_name)
    VALUES (${cropId}, '${cropName}')
  `);
};

let deleteHarvested = async (id) => {
  return await Crops.query(`
  DELETE FROM harvested
  WHERE  crop_id = ${id}
`);
}

module.exports = {
  getHarvested,
  addHarvested,
  deleteHarvested
}