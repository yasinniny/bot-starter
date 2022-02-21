const {Pool} = require('pg');
const {user,database,password,port,host,uri} = require('./utils/config.json');
const {MongoClient} = require('mongodb');

const pool = new Pool({
    user: user,
    database: database,
    password: password,
    port: port,
    host: host,
});

const mongo = new MongoClient(uri);

module.exports = {mongo, pool};
