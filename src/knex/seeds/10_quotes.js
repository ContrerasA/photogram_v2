/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quotes').del()
	await knex('quotes').insert([
		{
			id: "1",
			email: "wonks@gmail.com",
			eventOccasion: "Wedding",
			eventDate: new Date('July 10, 2023'),
			eventLocation: "San Jose"
	  }
  ]);
};
