const express = require('express');
const app = express();
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');

const root = require('./routes/home')
const profile = require('./routes/profile');

app.use(express.static('public'));

app.use('/', root);
app.use('/', profile);


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// app.use(express.static('public'));


app.listen(3000, function() {
  console.log('success')
});
