
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function(users){
    users.increments();
    users.string('first_name')
        .notNullable();
    users.string('last_name')
        .notNullable();
    users.string('email')
        .unique()
        .notNullable();
    users.string('password')
        .notNullable();
    users.string('occupation');
    users.string('past_experience');
    users.string('interests');
    users.timestamps(true, true);
    })
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
    jobs.string('title')
        .notNullable();
    jobs.string('description')
        .notNullable();
    jobs.string('img_url')
        .defaultTo('https://via.placeholder.com/150');    
  })
};

exports.down = function(knex) {
  
};