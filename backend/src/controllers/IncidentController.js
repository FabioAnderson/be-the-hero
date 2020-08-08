const connection = require('../database/connection');
const { limit } = require('../database/connection');
//const delete = require('../database/connection');
//const connection = require('../database/connection');
//const index  = require('./OngController');

module.exports = {

    async index(request, response){
        //page = 1 (se não houver valor em page, o padrão será 1)
        //page é um parametro na query
        const {page = 1} = request.query;

        const [count] = await connection('incidents')
            .count()

        const incidents = await connection('incidents')
            .join('ongs', 'ong.id', '=', 'incidents.ong_id')
            .limit(5)//limita a quantidade de registros que a query vai trazer
            .offset((page-1)*5)//ignora uma quantidade de resgistros. No caso page-1 * 5 ignora 0 registros na pagina 1, 5 na pagina 2, 10 na pagina 3 etc
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        //enviando o retorno de count pelo cabeçalho da requisição
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const{title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id){
            // 401 não autorizado
            return response.status(401).json({error: 'Operation not permitted'});
        }
        
        await connection('incidents').where('id',id).delete();

        //204 deo OK mas não tem conteudo pra retornar
        return response.status(204).send();
    }
};