var express = require("express");
var router = express.Router();
var BoothController = require("../controllers/boothController.js");

router.get("/", BoothController.getAllBooths);
router.get("/:id", BoothController.getBoothById);
router.get("/filterByLocation", BoothController.filterByLocation);
router.post("/create", BoothController.create);
router.patch("/:id", BoothController.updateBooth);
router.delete("/:id", BoothController.deleteBooth);

module.exports = router;
