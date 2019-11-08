const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const url = require('url');

const s3 = new aws.S3({
  accessKeyId: 'AKIAWGAZWVOMXK3I36RW',
  secretAccessKey: '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',
  Bucket: 'produce-app-pictures'
});


const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'produce-app-pictures',
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