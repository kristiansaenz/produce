const ObjectId = require('mongodb').ObjectID;
const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = { 
   register: function(req, res) {

    UserModel.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
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
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  }






    // let User = new UserModel({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password
    // });
    

    // User.save(function (err, User) {
    //   if (err) {
    //     return res.status(500).json({
    //       message: "Error when creating User",
    //       error: err
    //     });
    //   }
    //   return res.json(User)
    // });
//   }
 }