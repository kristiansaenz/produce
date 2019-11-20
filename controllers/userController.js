require("dotenv").config()
const ObjectId = require('mongodb').ObjectID;
const UserModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  getUserByBoothId: function (req, res) {
    let id = req.body.id;

    UserModel.find({
      'booth' : id
    }).exec(function (err, results) {
      if (err) {
        return res.status(500).json({
          message: "Error when finding User...",
          error: err
        });
      }
      console.log(results);
      return res.json(results);
    })
  },

  getUsers: function (req, res) {
    UserModel.find(function (err, users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting users :(',
          error: err
        });
      }
      return res.json(users);
    });
  }
}