const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "Just111.",
    host: "localhost",
    port: 5432,
    database:"perntodo"
})
model.exports = pool;