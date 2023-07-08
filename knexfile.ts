import type { Knex } from "knex";
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(".") // "." is for the directory where the .env, .env.local, ... is located. Follows Next.js environment loading order
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config: { [key: string]: Knex.Config } = {

	development: {
		client: 'pg',
		connection: {
			database: process.env.DATABASE,
			user: process.env.USER,
			password: process.env.PASSWORD
		},
		pool: {
			max: 95,    			//maximum connection which postgresql can intiate
			min: 0,     			//maximum connection which postgresql can intiate
			idleTimeoutMillis: 30000,
		},
		migrations: {
			directory: './src/knex/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './src/knex/seeds'
		},

	},
};
module.exports = config;
