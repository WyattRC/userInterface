const express = require('express');
const routes = express.Router();
const data = require('../models/info');

routes.get('/:profile', function(req, res) {
   var robot = req.params.profile;
   for (let i = 0; i < data.users.length; i++) {
     if (data.users[i].username === robot) {
       res.render('user', {
        users: data.users[i]
      });
    }

   }
  // res.send(`<img src="${avatar}"/>`);
});

module.exports = routes;
