const mongoose = require('mongoose');

module.exports = UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        collection: 'users'
    }
);

module.exports = exports = mongoose.model('users', UserSchema);