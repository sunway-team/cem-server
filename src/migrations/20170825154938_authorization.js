// eslint-disable-next-line func-names
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable().unique();
      table
        .enu('gender', ['male', 'female', 'secret', 'not-set'])
        .defaultTo('not-set')
        .notNullable();
      table.date('dob').nullable();
      table.string('version_key').notNullable();
      table.timestamps();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('users')]);
};
