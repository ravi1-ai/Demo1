const Knex = require("knex")({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'student_db',
  },
});
module.exports={Knex}