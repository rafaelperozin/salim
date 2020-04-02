const knex = require('knex');
const configuration = require('../../knexfile');

// Pega a variavel ambiente que esta sendo informada no script do package.json
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;