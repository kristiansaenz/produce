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
      email: req.body.email
    })
<<<<<<< HEAD
    Farmer.save(userInfo, function(err, result) {
=======
    Farmer.save(Farmer, function(err, result) {
>>>>>>> ed86dc95ac6f9665635418d53b1c236f2a5df999
      if(err) throw err;
      if(result) console.log('INSERTED SUCCESSFULLY')
      return res.json(Farmer)
    })
  }
}