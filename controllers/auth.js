require("dotenv").config()
const ObjectId = require('mongodb').ObjectID;
const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  register: function (req, res) {

    UserModel.findOne({
      email: req.body.email
    }).then(user => {
      if (user) {
        return res.status(400).json({
          email: "Email already registered"
        });
      } else {
        const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {

                jwt.sign({
                    id: user.name
                  }, //payload
                  process.env.JWT_SECRET, {
                    expiresIn: 3600
                  },
                  (err, token) => {
                    if (err) throw err;
                    res.json({
                      token,
                      user
                    })
                  }
                )
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  },

  login: function (req, res) {
    const { email, password } = req.body
    UserModel.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(400).json({ msg: "User not found" });
        } else {
          bcrypt.compare(password, user.password)
            .then(isMatch => {
              if(!isMatch) return res.status(400).json({ msg: "Invalid Password" })

              jwt.sign(
              { id: user.name }, //payload
              process.env.JWT_SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user
                })
              }
            )
          })
        }
      })
    }
  }
