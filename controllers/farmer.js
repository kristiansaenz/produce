const ObjectID = require('mongodb').ObjectID;
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
    const Farmer = new FarmerModel({
      name: req.body.name,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
        zip: req.body.address.zip
      },
      booth: {
        booth_name: req.body.booth.booth_name,
        description: req.body.booth.description,
        items: req.body.booth.items
      }
    })

    Farmer.save(Farmer, function(err, result) {
      if(err) throw err;
      if(result) console.log('INSERTED SUCCESSFULLY')
      return res.json(Farmer)
    })
  },

  // booth: function(req, res) {
  //   let id = req.params.id;
  //   // db.collection('farmers').find
  //   FarmerModel.findOne({_id: new ObjectId(id)}),
  //   function(err, res) {
  //     if(err) console.log(err)
  //     if(res !== null) {
  //       console.log(res)
  //     }
  //   }
  // }
}