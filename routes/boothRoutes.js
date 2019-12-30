require("dotenv").config()
var express = require("express");
var router = express.Router();
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
var BoothController = require("../controllers/boothController.js");

router.get("/", BoothController.getAllBooths);
router.get("/:id", BoothController.getBoothById);
router.post("/filterByLocation", BoothController.filterByLocation);
router.post("/filter", BoothController.filter);
router.post("/create", BoothController.create);
router.patch("/:id", BoothController.updateBooth);
router.delete("/:id", BoothController.deleteBooth);

router.post("/upload-images", (req, res) => {
  uploadsBusinessGallery(req, res, (error) => {
    console.log('files', req.files);
    if (error) {
      console.log('errors', error);
      res.json({ error: error });
    } else {
      // If File not found
      if (req.files === undefined) {
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected');
      } else {
        // If Success
        let fileArray = req.files,
          fileLocation;
        const galleryImgLocationArray = [];
        for (let i = 0; i < fileArray.length; i++) {
          fileLocation = fileArray[i].location;
          console.log('filenm', fileLocation);
          galleryImgLocationArray.push(fileLocation)
        }
        // Save the file name into database
        res.json({
          filesArray: fileArray,
          locationArray: galleryImgLocationArray
        });
      }
    }
  });
})

const s3 = new aws.S3({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  Bucket: process.env.BUCKET_NAME
});

// Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
  storage: multerS3({
   s3: s3,
   bucket: process.env.BUCKET_NAME,
   acl: 'public-read',
   key: function (req, file, cb) {
    cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
   }
  }),
  limits:{ fileSize: 4000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function( req, file, cb ){
   checkFileType( file, cb );
  }
 }).array( 'galleryImage', 4 );

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
