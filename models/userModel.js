const mongoose = require('mongoose');

module.exports = UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        location: String,
        saved_booths: Array,
        written_reviews: Array, 
        avatar: String,
        booth: String
    },
    {
        collection: 'users'
    }
);

module.exports = exports = mongoose.model('users', UserSchema);