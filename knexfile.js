// Update with your config settings.

module.exports = {

  development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/galleries.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
	testing: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/galleries-test.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
}
