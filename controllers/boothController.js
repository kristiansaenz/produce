const ObjectId = require("mongodb").ObjectID;
const zipToCoordinates = require("./helpers");
const BoothModel = require("../models/boothModel.js");

module.exports = {
  getAllBooths: function(req, res) {
    BoothModel.find(function(err, Booths) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Booths.",
          error: err
        });
      }
      return res.json(Booths);
    });
  },

  create: function(req, res) {
    // convert given zip to full address attribute to save in db
    let coordinates = zipToCoordinates(req.body.zip);
    coordinates.then(result => {
      let search_address = result.city + " " + result.state;

      const Booth = new BoothModel({
        address: result,
        searchAddress: result.city,
        rating: 0,
        reviews: [],
        booth_name: req.body.booth_name,
        description: req.body.description,
        produce: [],
        images: []
      });

      Booth.save(Booth, function(err, result) {
        if (err) throw err;
        if (result) console.log("Booth Created Successfully!");
        return res.json(Booth);

        // include a req body field with the logged in user's _id to search mongo
        // then add the Booth response object id to the UserModel id field.
      });
    });
  },

  getBoothById: function(req, res) {
    let id = req.params.id;

    BoothModel.findOne(
      {
        _id: id
      },
      function(err, booth) {
        if (err) {
          console.log(err);
        }
        if (booth) {
          res.json(booth);
        }
      }
    );
  },

  filterByLocation: function(req, res) {
    let state = req.body.state;
    console.log(state, 'from boothController');

    if (state !== "") {
      BoothModel.find({
        "address.state_abbr": new RegExp(state, "i")
      }).exec(function(err, results) {
        if (err) {
          return res.status(500).json({
            message: "Error when filtering Booths...",
            error: err
          });
        }
        console.log(results);
        return res.json(results);
      });
    } else {
      // Temporary fix: when submitting search with no value, return all booths
      BoothModel.find(function(err, Booths) {
        if (err) {
          return res.status(500).json({
            message: "Error when getting Booths.",
            error: err
          });
        }
        return res.json(Booths);
      });
    }
  },

  filterByProduce: function(req, res) {
    let produce = req.body.produce
    BoothModel.find({ 'produce.category': { $in: produce } }, function(err, Booths) {
      if (err) {
        return res.status(500).json({
          message: "Error when filtering produce.",
          error: err
        });
      }
      return res.json(Booths);
    })
  },

  filterByMultiple: function (req, res) {
    let produce = req.body.produce
    let location = req.body.location
    BoothModel.find(
      {
        'produce.category': { $in: produce },
        'address.state_abbr': new RegExp(location, "i")
      },
      function (err, Booths) {
        if (err) {
          return res.status(500).json({
            message: "Error when filtering location and produce.",
            error: err
          });
        }
        return res.json(Booths);
      })
  },

  filter: function(req, res) {
    let produce = req.body.produce
    let location = req.body.location

    if(location !== '' && produce.length > 0) {
      BoothModel.find(
        {
          'produce.category': { $in: produce },
          'address.state_abbr': new RegExp(location, "i")
        },
        function (err, Booths) {
          if (err) {
            return res.status(500).json({
              message: "Error when filtering location and produce.",
              error: err
            });
          }
          return res.json(Booths);
        })
    } else if(location === '' && produce.length > 0) {
      BoothModel.find({ 'produce.category': { $in: produce } }, function(err, Booths) {
        if (err) {
          return res.status(500).json({
            message: "Error when filtering produce.",
            error: err
          });
        }
        return res.json(Booths);
      })
    } else if(location !== '' && produce.length < 1) {
      BoothModel.find({ 'address.state_abbr': new RegExp(location, 'i') }, function(err, Booths) { 
        if (err) {
          return res.status(500).json({
            message: "Error when filtering Booths...",
            error: err
          });
        }
        return res.json(Booths);
      })
    }
      // BoothModel.find(function(err, Booths) {
      //   if (err) {
      //     return res.status(500).json({
      //       message: "Error when getting Booths.",
      //       error: err
      //     });
      //   }
      //   return res.json(Booths);
      // });
  },

  updateBooth: function(req, res) {
    let id = req.params.id;
    // console.log('req.body: ', req.body)

    BoothModel.findByIdAndUpdate(id, req.body, { new: true }).then(booth => {
      if (!booth) {
        return res.status(500).json({
          message: "Booth not found with id: " + id
        });
      }
      res.json(booth);
    });
  },

  deleteBooth: function(req, res) {
    let id = req.params.id;

    BoothModel.findByIdAndRemove(id).then(booth => {
      if (!booth) {
        return res.status(500).json({
          message: "Booth not found with id " + id
        });
      }
      res.json(booth);
    });
  }
};
