
exports.up = function(knex) {
    return knex.schema.createTable('transaction', function(table) {
        table.increments();
        table.string('type').notNullable();
        table.string('title').notNullable();
        table.decimal('value').notNullable();
        table.date('date').notNullable();
        table.string('status').notNullable();

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('user');

        table.string('budget_id').notNullable();
        table.foreign('budget_id').references('id').inTable('budget');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('transaction');
};
