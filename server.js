// Core dependencies
const path = require('path');


// NPM dependencies
const express = require('express');
const nunjucks = require('nunjucks');


// Routing
const routes = require('./app/routes/index');
const autoRoutes = require('./app/routes/auto');


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


// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/assets', express.static(path.join(__dirname, 'node_modules', 'govuk-frontend', 'assets')));


// Use routes
app.use(routes);
app.use(autoRoutes);


// Start app on port 3000
app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port 3000!');
  }
});


module.exports = app;
