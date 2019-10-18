const mongoose = require('mongoose');

module.exports = FarmerSchema = new mongoose.Schema(
    {
        name: String,
        email: String
    },
    {
        collection: 'farmers'
    }
);

module.exports = exports = mongoose.model('farmers', FarmerSchema);