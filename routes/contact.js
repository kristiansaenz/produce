const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contact');

router.post('/sendMessage', ContactController.sendMessage);

module.exports = router;