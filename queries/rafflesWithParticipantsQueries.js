const db = require('../db/dbConfig');

module.exports = {
  getRafflesWithParticipants: async () => {
    try {
      return await db.any('SELECT raffles.*, participants.* FROM raffles INNER JOIN raffle_participants ON raffles.id = raffle_participants.raffle_id INNER JOIN participants ON participants.id = raffle_participants.participant_id');
    } catch (error) {
      throw new Error('Error fetching raffles with participants: ' + error.message);
    }
  }
};
