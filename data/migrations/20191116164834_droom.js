
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
    })
};

exports.down = function(knex) {
  
};
