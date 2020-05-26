
const pool = require('pg');

const client = new pool.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect(() => {
    console.log('Base de dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => client.query(text, params)
};