// eslint-disable-next-line func-names
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('rooms', table => {
      table.increments('id').primary();
      table.string('name');
      table.integer('seat_num');
      table
        .enu('status', ['on', 'off'])
        .defaultTo('on')
        .notNullable();
    }),
  ]);
};

// eslint-disable-next-line func-names
exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('rooms')]);
};
