require("dotenv").config();
//const ObjectId = require("mongodb").ObjectID;
const UserModel = require("../models/userModel");
const BoothModel = require("../models/boothModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getUserByBoothId: function(req, res) {
    let id = req.body.id;

    UserModel.find({ booth: id }, { password: 0, written_reviews: 0, saved_booths: 0 })
    .exec(function(err, results) {
      if (err) {
        return res.status(500).json({
          message: "Error when finding User...",
          error: err
        });
      }
      console.log(results);
      return res.json(results);
    });
  },

  getUserById: function(req, res) {
    let id = req.params.id;

    UserModel.findById(id, { password: 0 }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: "Could not find user by id",
          error: err
        });
      }
      return res.json(user);
    });
  },

  getUsers: function(req, res) {
    UserModel.find(function(err, users) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting users :(",
          error: err
        });
      }
      return res.json(users);
    });
  },

  updateUser: function(req, res) {
    let id = req.params.id;

    UserModel.findByIdAndUpdate(id, req.body, { new: true }).then(user => {
      if (!user) {
        return res.status(500).json({
          message: "User not found with id " + id
        });
      }
      res.json(user);
    });
  },

  addFavoriteBooth: function(req, res) {

    let id = req.body.id
    let booth = req.body.booth


    UserModel.findOneAndUpdate(
      { _id: id },
      { $push: { saved_booths: booth  } },
      { useFindAndModify: false, returnOriginal: false },
      function (error, success) {
        if (error) {
            console.log("this is the error : ", error);
        } else {
            console.log('FAVORITED BOOTH: ', booth)
            res.json(success.reviews)
        }
    });
  },

  removeFavoriteBooth: function(req, res) {

    let id = req.body.id
    let booth = req.body.booth

    UserModel.findOneAndUpdate(
      { _id: id },
      { $pull: { saved_booths: { _id: booth._id }  } },
      { useFindAndModify: false, returnOriginal: false },
      function (error, success) {
        if (error) {
            console.log("this is the error : ", error);
        } else {
            res.json(success.saved_booths)
        }
    });

  },



  deleteUser: function(req, res) {
    let id = req.params.id;

    UserModel.findByIdAndRemove(id).then(user => {
      if (!user) {
        return res.status(500).json({
          message: "User not found with id " + id
        });
      }
      res.json(user);
    });
  }
};
