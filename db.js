/** Database for lunchly */

const pg = require("pg");
let dotenv = require("dotenv").config();

const db = new pg.Client(process.env.DB_URL);

db.connect();

module.exports = db;
