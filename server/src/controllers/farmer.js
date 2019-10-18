const FarmerModel = require('../models/farmer.js')

const userInfo ={
  name: "Jason",
  email: "jason@123.com"
}

module.exports = {
  list: function(req, res) {
    FarmerModel.find(function(err, Farmers) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Farmers.",
          error: err
        });
      }
      return res.json(Farmers);
    });
  },

  create: function(req, res) {
    const Farmer = new FarmerModel({
      name: req.body.name,
      email: req.body.email
    })
    Farmer.save(userInfo, function(err, result) {
      if(err) throw err;
      if(result) console.log('INSERTED SUCCESSFULLY')
      return res.json(Farmer)
    })
  }
}