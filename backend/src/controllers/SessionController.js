const connection = require("../database/connection");

module.expors ={
    async create(request, response){
        const {id} = request.body;

        const ong = await connection('ongs').where('id',id)
        .where('id',id)
        .select('name')
        .first();

        //se a ong não existir
        if(!ong){
            // status 400 bad request (algo deu errado)
            return response.status(400).json({error:'No ONG found with this ID'});
        }
        return response.json(ong);
    }
}