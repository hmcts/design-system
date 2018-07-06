// Core dependencies
const path = require('path');


// NPM dependencies
const express = require('express');
const nunjucks = require('nunjucks');


// Routing
const router = require('./app/routes/index');


const app = express();


// Setup application
const appViews = [
  path.join(__dirname, 'app/views'),
  path.join(__dirname, 'app/views/layouts'),
  path.join(__dirname, 'app/views/partials')
];


// Configurations
nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
});


// Set view engine
app.set('view engine', 'html');


// Use routes
app.use('/', router);


// Start app on port 3000
app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port 3000!');
  }
});


module.exports = app;
