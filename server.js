const knex = require('knex')({
  client: 'pg',
  connection: {
    connectionString: 'postgres://icfbjufkpvcget:9769ad61f7fc87cba3c74bf4ab7210ac94e58bdf352967279d9557bacb0fdda2@ec2-54-157-12-250.compute-1.amazonaws.com:5432/d1hklbbgf1fce0',
    ssl: {
      rejectUnauthorized: false,
    },
  },
});


const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
  let data = {}
  let users = [];
  try {
    data = await knex.raw('SELECT * FROM users');
    users = data.rows;
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({
    data: users,
  })
});


app.listen(3000, () => {
  console.log('Server started on port 3000')
});