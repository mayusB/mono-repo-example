const { Pool, Client } = require('pg')
const { RDS } = require('aws-sdk')

// ruleid: node-pg-hardcoded-secret
const client = new Client({
  user: 'a',
  host: 'localhost',
  port: '5432',
  database: 'eventos',
  password: 'a',
});

var	pg1 = require('pg');

// ruleid: node-pg-hardcoded-secret
let b = new pg1.Client("tcp://postgres:password@localhost:5432/aaaa");

let foo = {
    user: 'a',
    host: 'localhost',
    port: '5432',
    database: 'eventos',
    password: 'a',
  }
// ruleid: node-pg-hardcoded-secret
const client = new Client(foo);

// ruleid: node-pg-hardcoded-secret
const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})


const signerOptions = {
  credentials: {
    accessKeyId: 'YOUR-ACCESS-KEY',
    secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
  },
  region: 'us-east-1',
  hostname: 'example.aslfdewrlk.us-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'api-user',
}
const signer = new RDS.Signer()
const getPassword = () => signer.getAuthToken(signerOptions)
// ruleid: node-pg-hardcoded-secret
const pool = new Pool({
  host: signerOptions.hostname,
  port: signerOptions.port,
  user: signerOptions.username,
  database: 'my-db',
  password: getPassword,
})

const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// ruleid: node-pg-hardcoded-secret
const pool = new Pool({
  connectionString,
})
// ruleid: node-pg-hardcoded-secret
const client = new Client({
  connectionString,
})

// ok: node-pg-hardcoded-secret
const client = new Client({
  user: 'a',
  host: 'localhost',
  port: '5432',
  database: 'eventos',
  password: a,
});

let foo2 = {
  user: 'a',
  host: 'localhost',
  port: '5432',
  database: 'eventos',
  password: a,
}
// ok: node-pg-hardcoded-secret
const client = new Client(foo2);

// ok: node-pg-hardcoded-secret
const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: var,
  port: 3211,
})

const signerOptions = {
  credentials: {
    accessKeyId: 'YOUR-ACCESS-KEY',
    secretAccessKey: mykey,
  },
  region: 'us-east-1',
  hostname: 'example.aslfdewrlk.us-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'api-user',
}
const signer = new RDS.Signer()
const getPassword = () => signer.getAuthToken(signerOptions)
// ok: node-pg-hardcoded-secret
const pool = new Pool({
  host: signerOptions.hostname,
  port: signerOptions.port,
  user: signerOptions.username,
  database: 'my-db',
  password: getPassword,
})

const connectionString = "postgresql://dbuser:" + process.env.SECRET + "@database.server.com:3211/mydb"
// ok: node-pg-hardcoded-secret
const pool = new Pool({
  connectionString,
})
// ok: node-pg-hardcoded-secret
const client = new Client({
  connectionString,
})
