// Core dependencies
import path from 'path';


// NPM dependencies
import express from 'express';
import nunjucks from 'nunjucks';


// Routing
import router from './app/routes/index';

let app = express();


// Setup application
let appViews = [
  path.join(__dirname, 'app/views')
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