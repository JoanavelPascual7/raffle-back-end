const db = require('../db/dbConfig');

module.exports = {
  getAllParticipants: async () => {
    try {
      return await db.any('SELECT * FROM participants');
    } catch (error) {
      throw new Error('Error fetching participants: ' + error.message);
    }
  },

  getParticipantById: async (id) => {
    try {
      return await db.one('SELECT * FROM participants WHERE id = $1', [id]);
    } catch (error) {
      throw new Error('Error fetching participant: ' + error.message);
    }
  },

  createParticipant: async (firstname, lastname, email, phone) => {
    try {
      return await db.one('INSERT INTO participants (firstname, lastname, email, phone) VALUES ($1, $2, $3, $4) RETURNING *', [firstname, lastname, email, phone]);
    } catch (error) {
      throw new Error('Error creating participant: ' + error.message);
    }
  },

  updateParticipant: async (id, firstname, lastname, email, phone) => {
    try {
      return await db.one('UPDATE participants SET firstname = $2, lastname = $3, email = $4, phone = $5 WHERE id = $1 RETURNING *', [id, firstname, lastname, email, phone]);
    } catch (error) {
      throw new Error('Error updating participant: ' + error.message);
    }
  },

  deleteParticipant: async (id) => {
    try {
      await db.none('DELETE FROM participants WHERE id = $1', [id]);
    } catch (error) {
      throw new Error('Error deleting participant: ' + error.message);
    }
  }
};
