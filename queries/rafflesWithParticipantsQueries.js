const db = require('../db/dbConfig');

module.exports = {
  getRafflesWithParticipants: async () => {
    try {
      const rawData = await db.any(`
        SELECT raffles.name as raffle_name, participants.*
        FROM raffles
        INNER JOIN raffle_participants ON raffles.id = raffle_participants.raffle_id
        INNER JOIN participants ON participants.id = raffle_participants.participant_id
      `);

      // Group participants by raffle
      const rafflesWithParticipants = {};
      rawData.forEach(row => {
        const { raffle_name, ...participant } = row;
        if (!rafflesWithParticipants[raffle_name]) {
          rafflesWithParticipants[raffle_name] = { name: raffle_name, participants: [] };
        }
        rafflesWithParticipants[raffle_name].participants.push(participant);
      });

      return Object.values(rafflesWithParticipants);
    } catch (error) {
      throw new Error('Error fetching raffles with participants: ' + error.message);
    }
  }
};
