const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    //metodo de inserção no banco
    async create(request, response) {
        //separando os campos esperados em variaveis separadas
        //isso impede que o usuario mande mais informação do que preciso
        const {name, email, whatsapp, city, uf} = request.body;
        console.log(name, email, whatsapp, city, uf);
    
        //gerando 4 bytes em hex para usar como id da ong
        //era mais facil fazer login por email kkkkk
        const id = crypto.randomBytes(4).toString('HEX');
    
        //await aguarda essa instrução terminar para continuar o fluxo
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({id});
    },

    //metdodo de listagem
    async index(request,response) {
        const ongs = await connection('ongs').select('*');
      
        return response.json(ongs);
      }


};