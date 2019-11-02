const Farmer = require('../models/farmer');
const User = require('../models/user');

module.exports = app => {
  app.route('/api/farmers').get(Farmer.getfarmers);
  app.route('/api/users').get(User.getUsers);
};