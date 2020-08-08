//Onde são criadas as coisas por migrations
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
      //Id esta como string para não ser facilmente adivinhado
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  });
};

//O que precisa desfazer se algo deu errado
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
