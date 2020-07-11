const express = require('express');

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
})


routes.get('/users', (request, response)=>{
    const params = request.query;
    return response.json({
        evento: 'semana omnistack 11.0',
        aluno: 'Fabio Anderson'
    });
    console.log(params);

})

//exporta a variavel de dentro de um arquivo
module.exports = routes;