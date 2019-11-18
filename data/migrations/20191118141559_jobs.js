
exports.up = function(knex) {
    return knex.schema
    .createTable('jobs', function(jobs){
        jobs.increments();
        jobs.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        jobs.timestamps(true, true);
        jobs.string('img_url')
            .defaultTo('https://via.placeholder.com/150');
        jobs.string('title')
            .notNullable();
        jobs.string('salary')
            .notNullable();
        jobs.string('description')
            .notNullable();    
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('jobs');
};
