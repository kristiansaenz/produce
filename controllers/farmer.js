const ObjectId = require('mongodb').ObjectID;
const zipToCoordinates = require('./helpers')
const FarmerModel = require('../models/farmer.js')

module.exports = {
  list: function(req, res) {
    FarmerModel.find(function(err, Farmers) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Farmers.',
          error: err
        });
      }
      return res.json(Farmers);
    });
  },

  create: function(req, res) {

    // convert given zip to full address attribute to save in db
    let coordinates = zipToCoordinates(req.body.zip)
      coordinates.then(result => {

      const Farmer = new FarmerModel({
        name: req.body.name,
        email: req.body.email,
        address: result,
        booth: {
          booth_name: req.body.booth.booth_name,
          description: req.body.booth.description,
          produce: req.body.booth.produce
        }
      })


      Farmer.save(Farmer, function(err, result) {
        if(err) throw err;
        if(result) console.log('INSERTED SUCCESSFULLY')
        return res.json(Farmer)
      })
    })
  },

  booth: function(req, res) {
    let id = req.params.id;

    FarmerModel.findOne({ _id: id }, function(err, farmer) {
      if(err) {
        console.log(err);
      }
      if(farmer) {
        console.log(farmer)
        res.json(farmer);
      }
    });
  },

  filter: function(req, res) {
    let city = req.query.city;
    console.log(city)

    if(city !== '') {
      FarmerModel.find({'address.city': new RegExp(city, 'i')}).exec(function(err, results) {
        if(err) {
          return res.status(500).json({
            message: "Error when filtering Farmers...",
            error: err
          });
        }
        console.log(results);
        return res.json(results);
      })
    } else {
      // Temporary fix: when submitting search with no value, return all farms
      FarmerModel.find(function(err, Farmers) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting Farmers.',
            error: err
          });
        }
        return res.json(Farmers);
      });
    }
  }
}