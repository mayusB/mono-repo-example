const pg = require('pg-pool')

const client = new pg({
  user: 'a',
  host: 'localhost',
  port: '5432',
  database: 'eventos',
  password: 'abc'
});
