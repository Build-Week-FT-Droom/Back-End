
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
      users.timestamp('created_at')
                .defaultTo(knex.fn.now());

      })
      .createTable('jobs', function(jobs){
        jobs.increments();
        jobs.timestamp('created_at')
                .defaultTo(knex.fn.now());

        jobs.string('img_url')
            .defaultTo('https://via.placeholder.com/150');
        jobs.string('title')
            .notNullable();
        jobs.string('salary')
            .notNullable();
        jobs.string('description')
            .notNullable();  
        jobs.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');  
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('jobs');
  };
