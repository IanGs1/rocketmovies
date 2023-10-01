exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments('id');

    table.text('name');
    
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');

    table.integer('movie_id');
    table.foreign('movie_id').references('id').inTable('movies').onDelete('CASCADE');;
})

exports.down = knex => knex.schema.dropTable("tags");
