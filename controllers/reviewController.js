const BoothModel = require('../models/boothModel');

module.exports = {
  addReview: function(req, res) {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    const Review = {
      reviewer: req.body.reviewer,
      reviewer_name: req.body.reviewer_name,
      reviewer_avatar: req.body.reviewer_avatar,
      rating: req.body.rating,
      message: req.body.message,
      created_at: date
    };

    BoothModel.findOneAndUpdate(
      { _id: req.body.booth_id },
      { $push: { reviews: Review } },
      { useFindAndModify: false, returnOriginal: false },
      function(error, success) {
        if (error) {
          console.log('this is the error : ', error);
        } else {
          res.json(success.reviews);
        }
      }
    );
  }
};
