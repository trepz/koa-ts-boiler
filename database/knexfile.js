require('dotenv').config({ path: '../.env' })

const settings = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 0,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
}

module.exports = {
  // Environment configs
  development: settings,
  testing: settings,
  production: {
    ...settings,
    seeds: {
      directory: '../database/prod-seeds',
    },
  },
}
