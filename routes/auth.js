require("dotenv").config()
const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/user.js')
const AuthController = require('../controllers/auth')
const UserModel = require('../models/user')
const auth = require('../middleware/auth')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/user', auth, AuthController.user)

module.exports = router;