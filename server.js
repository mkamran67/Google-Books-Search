const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const connectDB = require('./config/connectDB.js');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

connectDB();

// Start the API server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
