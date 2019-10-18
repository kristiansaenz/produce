const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = 'mongodb://ryanjalufka:kijut123@ds331558.mlab.com:31558/produce';
const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
connection
    .then(db => {
        console.log("connected to db");
        // Populate.populate();
        return db;
    }).catch(err => {
        console.log("ERROR UTIL/db.js", err);
    })

module.exports = connection;