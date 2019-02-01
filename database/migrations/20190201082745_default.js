exports.up = knex => {
  return knex.schema.createTable('default', table => {
    table.increments('id')
    table.string('name').notNullable()
  })
}

exports.down = knex => knex.schema.dropTableIfExists('default')
