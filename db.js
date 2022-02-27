const {Pool} = require('pg');
const {user,database,password,port,host} = require('./utils/config.json');

const pool = new Pool({
    user: user,
    database: database,
    password: password,
    port: port,
    host: host,
});

module.exports = {pool};
