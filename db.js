const pgp = require('pg-promise')();
const {user,database,password,port,host} = require('./utils/config.json');

const cn = {
    user: user,
    database: database,
    password: password,
    port: port,
    host: host,
};

const db = pgp(cn);

module.exports = {db};
