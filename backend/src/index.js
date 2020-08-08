//importando modulo de segurança CORS
const cors = require('cors');

//express está importando o modulo express
const express = require('express');

//importanto routes
//  ./ indica que é um arquivo e não uma biblioteca
const routes = require('./routes');

// app armazena a aplicação
const app  = express();

//permite acesso somente a origens que defini
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

//converte o que é recebido em 'objetos' javascript
app.use(express.json());
app.use(routes);

//seleciona a porta de comunicação da aplicação
app.listen(3333);


