const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Desacoplando as rotas do express para gerenciar nesse arquivo
const routes = express.Router();
/*
*
* Metodos Http
*
* Get: buscar/listar informação
* Post: criar informação
* Put: Alterar informação
* Delete: Apagar informação
*
*
* Rota (o que vem antes da barra)
* Recurso (o que vem depois)
*
*
* Tipos de parametros
*
* Query Params (request.query): parametros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params (request.params): Parametros utilizado para identificar recursos
* Request Body (request.body): Corpo da requisição, utilizado para criar ou alterar recursos
*/


//criando um metdo get
// '/' indica que é a raiz
//após a rota, inicia-se uma função que recebe uma requisição e resposta
routes.get('/', (request, response)=>{
    //retornando um json
    return response.json({
        evento: 'semana omnistack 11.0',
        aluno: 'Fabio Anderson'
    });
});


routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents',IncidentController.create);
routes.post('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);


//exporta a variavel de dentro de um arquivo
module.exports = routes;