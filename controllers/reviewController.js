const BoothModel = require('../models/boothModel')
const ReviewModel = require('../models/reviewModel')


module.exports = {
  addReview: function(req, res) {

    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


    const Review = {
      reviewer: req.body.reviewer,
      reviewer_name: req.body.reviewer_name,
      reviewer_avatar: req.body.reviewer_avatar,
      message: req.body.message,
      created_at: date
    }

    BoothModel.findOneAndUpdate(
      { _id: req.body.booth_id },
      { $push: { reviews: Review  } },
      {useFindAndModify: false},
      function (error, success) {
        if (error) {
            console.log(error);
        } else {
            res.json(success)
        }
    });
  }
}