const express = require('express');
const routes = express.Router();
const data = require('../models/info');

routes.get('/', function(req, res) {
  res.render('home', {
      users: data.users
  })
});

module.exports = routes;
