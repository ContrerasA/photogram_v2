import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex: Knex) {
  // Deletes ALL existing entries
  await knex('eventLocations').del()
  await knex('eventLocations').insert([
    {id: 1, location: "San Jose", distance: 0},
    {id: 2, location: "San Francisco", distance: 50},
    {id: 3, location: "Red Wood city", distance: 30},
    {id: 4, location: "Gilroy", distance: 30},
    {id: 5, location: "Milpitas", distance: 20},
    {id: 6, location: "Other", distance: 30},
  ]);
};
