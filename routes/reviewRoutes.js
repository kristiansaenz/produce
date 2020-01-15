const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.post('/add-review', ReviewController.addReview);

module.exports = router;
