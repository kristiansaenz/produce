const cities = require('cities');

module.exports = async function zipToCoordinates(zipcode) {
  let coordinates = await cities.zip_lookup(zipcode);
  return coordinates;
};
