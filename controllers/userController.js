require("dotenv").config()
const ObjectId = require('mongodb').ObjectID;
const UserModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  getUserByBoothId: function (req, res) {
    let id = req.params.id;

    UserModel.findOne({
      _id: id
    }, function (err, user) {
      if (err) {
        console.log(err);
      }
      if (user) {
        console.log(user)
        res.json(user);
      }
    });
  }
}