var express = require('express');
var router = express.Router();
var FarmersController = require('../controllers/farmer.js');

/*
 * GET
 */
router.get('/', FarmersController.list);
router.post('/create', FarmersController.create);

module.exports = router;