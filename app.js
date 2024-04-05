// app.js

const express = require('express');
const cors = require('cors');
const rafflesController = require('../raffle-back-end/controllers/rafflesController');
const participantsController = require('../raffle-back-end/controllers/participantsController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Controllers
app.use('/api/raffles', rafflesController);
app.use('/api/participants', participantsController); 

// Health check route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running'});
});

module.exports = app;
