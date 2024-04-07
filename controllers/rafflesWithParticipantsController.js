const express = require('express');
const router = express.Router();
const rafflesWithParticipantsQueries = require('../queries/rafflesWithParticipantsQueries');

// Get all raffles with participants
router.get('/', async (req, res, next) => {
  try {
    const rafflesWithParticipants = await rafflesWithParticipantsQueries.getRafflesWithParticipants();
    res.json({ data: rafflesWithParticipants });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
