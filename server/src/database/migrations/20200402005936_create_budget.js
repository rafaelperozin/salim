
exports.up = function(knex) {
    return knex.schema.createTable('budget', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.decimal('budget').notNullable();
        table.string('saving').nullable();

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('user');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('budget');
};
