const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

module.exports = ReviewSchema = new mongoose.Schema(
  {
      reviewer: String,
      reviewer_name: String,
      reviewer_avatar: String,
      message: String,
      created_at: Date
  }
);

module.exports = exports = mongoose.model('reviews', ReviewSchema);