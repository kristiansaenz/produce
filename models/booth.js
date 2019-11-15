const mongoose = require('mongoose');

module.exports = BoothSchema = new mongoose.Schema({
  address: Object,
  searchAddress: String,
  rating: Number,
  reviews:[],
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