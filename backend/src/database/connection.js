const knex = require('knex');
const configuration = require('../../knexfile');

//pegando a conexão referente ao ambiente de desenvolvimento
const connection = knex(configuration.development);

//exportando a conexao
module.exports = connection;