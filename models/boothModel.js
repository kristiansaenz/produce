const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  reviewer: String,
  reviewer_name: String,
  reviewer_avatar: String,
  rating: Number,
  message: String,
  created_at: Date
})

const ProduceSchema = new mongoose.Schema({
  category: String,
  items: Array
})

module.exports = BoothSchema = new mongoose.Schema({
  address: Object,
  searchAddress: String,
  rating: Number,
  reviews: [ReviewSchema],
  booth_name: String,
  description: String,
  produce: [ProduceSchema],
  images: Array
}, {
  collection: 'booths'
});

module.exports = exports = mongoose.model('booths', BoothSchema);