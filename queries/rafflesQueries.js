const db = require('../db/dbConfig');

module.exports = {
  getAllRaffles: async () => {
    try {
      return await db.any('SELECT * FROM raffles');
    } catch (error) {
      throw new Error('Error fetching raffles: ' + error.message);
    }
  },
  getRaffleById: async (id) => {
    try {
      return await db.one('SELECT * FROM raffles WHERE id = $1', [id]);
    } catch (error) {
      throw new Error('Error fetching raffle: ' + error.message);
    }
  },
  createRaffle: async (name, secret_token) => {
    try {
      return await db.one('INSERT INTO raffles (name, secret_token) VALUES ($1, $2) RETURNING *', [name, secret_token]);
    } catch (error) {
      throw new Error('Error creating raffle: ' + error.message);
    }
  },
  getRaffleParticipants: async (raffleId) => {
    try {
      return await db.any('SELECT participants.* FROM participants INNER JOIN raffle_participants ON participants.id = raffle_participants.participant_id WHERE raffle_participants.raffle_id = $1', [raffleId]);
    } catch (error) {
      throw new Error('Error fetching participants for raffle: ' + error.message);
    }
  },
  addParticipantToRaffle: async (raffleId, participant) => {
    const { firstname, lastname, email, phone } = participant;
    try {
      return await db.one('INSERT INTO participants (firstname, lastname, email, phone) VALUES ($1, $2, $3, $4) RETURNING *', [firstname, lastname, email, phone]);
    } catch (error) {
      throw new Error('Error adding participant to raffle: ' + error.message);
    }
  },
  pickWinner: async (raffleId, secret_token) => {
    // logic to pick a winner
  },
  getWinner: async (raffleId) => {
    // logic to get the winner
  }
};
