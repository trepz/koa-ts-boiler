exports.seed = async knex => {
  await knex('default').insert([{ name: 'Production Bob' }])
}
