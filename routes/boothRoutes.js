var express = require('express');
var router = express.Router();
var BoothController = require('../controllers/boothController.js');


router.get('/', BoothController.getAllBooths);
router.get('/booth/:id', BoothController.getBoothById);
router.get('/filterByLocation', BoothController.filterByLocation);
router.post('/create', BoothController.create);

module.exports = router;