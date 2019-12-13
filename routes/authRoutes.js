require("dotenv").config()
const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/userController')
const AuthController = require('../controllers/authController')
const UserModel = require('../models/userModel')
const auth = require('../middleware/auth')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/user', auth, AuthController.user)

module.exports = router;