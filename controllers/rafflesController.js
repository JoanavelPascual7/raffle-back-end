const express = require('express');
const router = express.Router();
const rafflesQueries = require('../queries/rafflesQueries');

// Get all raffles
router.get('/', async (req, res, next) => {
  try {
    const raffles = await rafflesQueries.getAllRaffles();
    res.json({ data: raffles });
  } catch (error) {
    next(error);
  }
});

// Get raffle by ID
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const raffle = await rafflesQueries.getRaffleById(id);
    res.json({ data: raffle });
  } catch (error) {
    next(error);
  }
});

// Create a new raffle
router.post('/', async (req, res, next) => {
  const { name, secret_token } = req.body;
  try {
    const newRaffle = await rafflesQueries.createRaffle(name, secret_token);
    res.status(201).json({ data: newRaffle });
  } catch (error) {
    next(error);
  }
});

// Get all participants of a raffle
router.get('/:id/participants', async (req, res, next) => {
  const { id } = req.params;
  try {
    const participants = await rafflesQueries.getRaffleParticipants(id);
    res.json({ data: participants });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
