import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex): Promise<any> {
	return Promise.all([
		knex.schema.createTable('eventLocations', table => {
			table.integer("id").primary().unique();
			table.text("location");
			table.float("distance").defaultTo(0);
		}),
		knex.schema.createTable('quotes', table => {
			table.text("id").primary().unique();
			table.text("name");
			table.text("email");
			table.text("eventOccasion");
			table.date("eventDate");
			table.text("eventLocation");
			table.date("createdOn").defaultTo(knex.fn.now());
		})
	])
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex) {
	return Promise.all([
		knex.schema.dropTableIfExists("eventLocations"),
		knex.schema.dropTableIfExists("quotes"),

	])
};
