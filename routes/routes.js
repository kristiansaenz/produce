const Farmer = require('../models/farmer');

module.exports = app => {
  app.route('/api/farmers').get(Farmer.getfarmers);
};