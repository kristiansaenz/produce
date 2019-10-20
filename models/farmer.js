const mongoose = require('mongoose');

module.exports = FarmerSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        address: {
          street: String,
          city: String,
          state: String,
          zip: String
        },
        booth: {
          booth_name: String,
          description: String,
          items: Array
        },
    },
    {
        collection: 'farmers'
    }
);

module.exports = exports = mongoose.model('farmers', FarmerSchema);