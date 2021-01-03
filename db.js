const Pool = require('pg').Pool;

//conect to the database - docs: https://node-postgres.com/api/pool

const pool = new Pool({
  user: 'postgres',
  password: process.env.password,
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
