const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//const LOCAL_MONGO_URI = require("./keys").LOCAL_MONGO_URI
const uri = process.env.MONGODB_URI || LOCAL_MONGO_URI;
const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

connection
    .then(db => {
        return db;
    }).catch(err => {
        console.log("ERROR UTIL/db.js", err);
    })

module.exports = connection;