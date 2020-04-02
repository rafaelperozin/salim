
exports.up = function(knex) {
    return knex.schema.createTable('budget', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.decimal('budget').notNullable();
        table.string('status').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('budget');
};
