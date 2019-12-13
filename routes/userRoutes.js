require("dotenv").config()
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const url = require('url');
const UserModel = require('../models/userModel');


// router.get('/getUserByBoothId/:id', UserController.getUserByBoothId)
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/getUserByBoothId', UserController.getUserByBoothId);
router.post('/upload-avatar', (req, res) => {
  profileImgUpload(req, res, (error) => {
    if (error) {
      console.log('errors', error);
      res.json({
        error: error
      });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected');
      } else {

        // If Success
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        console.log('image location: ', imageLocation)
        // Save the file name into database into profile model

        UserModel.findOne({
          //  email: 'ryanjalufka@gmail.com'
          email: req.query.user
        }).then(user => {
          user.avatar = imageLocation
          user.save()
          res.json(user)
        });
      }
    }
  });
});


const s3 = new aws.S3({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  Bucket: process.env.BUCKET_NAME
});

const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  limits: {
    fileSize: 2000000
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}


module.exports = router;