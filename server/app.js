var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// load environment variables
require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle GET requests to /api route
app.use('/api/cars', function(req, res, next) {
  res.json(
    {
      cars: [
        { make: "Audi", model: "A3" },
        { make: "Audi", model: "A5" },
        { make: "Audi", model: "A6 Avant" },
        { make: "BMW", model: "3 Series" },
        { make: "BMW", model: "5 Series Estate" },
        { make: "Volvo", model: "V90" },
        { make: "Volvo", model: "XC60" }
      ]
    }
  );
});

app.use('/api/welcome-message', function(req, res, next) {
  res.json({
    welcomeMessage: process.env.WELCOME_MESSAGE
  });
});

/* GET home page */
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT || 5000;

console.log(`Starting Express on port ${PORT}...`);

app.listen(PORT);
