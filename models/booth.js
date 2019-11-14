const mongoose = require('mongoose');

module.exports = BoothSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: Object,
  searchAddress: String,
  avatar: String,
  booth: {
    booth_name: String,
    description: String,
    produce: [Object],
    images: String
  },
}, {
  collection: 'booths'
});

module.exports = exports = mongoose.model('booths', BoothSchema);