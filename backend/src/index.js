//express está importando o modulo express
const express = require('express');

//importanto routes
//  ./ indica que é um arquivo e não uma biblioteca
const routes = require('./routes');

// app armazena a aplicação
const app  = express();

//converte o que é recebido em 'objetos' javascript
app.use(express.json());

app.use(routes);


//seleciona a porta de comunicação da aplicação
app.listen(3333);


