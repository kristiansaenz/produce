const mongoose = require('mongoose');

const ProduceSchema = new mongoose.Schema({
  category: String,
  items: Array
})

module.exports = BoothSchema = new mongoose.Schema({
  address: Object,
  searchAddress: String,
  rating: Number,
  reviews: Array,
  booth_name: String,
  description: String,
  produce: [ProduceSchema],
  images: Array
}, {
  collection: 'booths'
});

module.exports = exports = mongoose.model('booths', BoothSchema);