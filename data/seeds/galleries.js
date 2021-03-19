
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("galleries").truncate()
  await knex("galleries").insert([
    { name: "Art and Light Gallery"},
    { name: "RIVERWORKS Gallery"},
    { name: "The Art Cellar"}
  ])
};
