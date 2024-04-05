const express = require('express');
const router = express.Router();
const participantsQueries = require('../queries/participantsQueries');

// Get all participants
router.get('/', async (req, res, next) => {
  try {
    const participants = await participantsQueries.getAllParticipants();
    res.json({ data: participants });
  } catch (error) {
    next(error);
  }
});

// Get participant by ID
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const participant = await participantsQueries.getParticipantById(id);
    res.json({ data: participant });
  } catch (error) {
    next(error);
  }
});

// Create a new participant
router.post('/', async (req, res, next) => {
  const { firstname, lastname, email, phone } = req.body;
  try {
    const newParticipant = await participantsQueries.createParticipant(firstname, lastname, email, phone);
    res.status(201).json({ data: newParticipant });
  } catch (error) {
    next(error);
  }
});

// Update participant by ID
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, email, phone } = req.body;
  try {
    const updatedParticipant = await participantsQueries.updateParticipant(id, firstname, lastname, email, phone);
    res.json({ data: updatedParticipant });
  } catch (error) {
    next(error);
  }
});

// Delete participant by ID
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await participantsQueries.deleteParticipant(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
