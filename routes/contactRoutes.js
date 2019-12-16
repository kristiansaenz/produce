const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

router.post('/sendMessage', ContactController.sendMessage);

module.exports = router;