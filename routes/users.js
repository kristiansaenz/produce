var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/user.js');

// router.get('/', UsersController.list);
router.post('/register', UsersController.register);
// router.post('/create', UsersController.create);

module.exports = router;