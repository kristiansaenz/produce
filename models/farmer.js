const mongoose = require('mongoose');

module.exports = FarmerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: Object,
  avatar: String,
  booth: {
    booth_name: String,
    description: String,
    produce: [Object],
    images: String
  },
}, {
  collection: 'farmers'
});

module.exports = exports = mongoose.model('farmers', FarmerSchema);