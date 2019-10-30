const mongoose = require('mongoose');

module.exports = FarmerSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        address: Object,
        booth: {
          booth_name: String,
          description: String,
          produce: [Object]
        },
    },
    {
        collection: 'farmers'
    }
);

module.exports = exports = mongoose.model('farmers', FarmerSchema);