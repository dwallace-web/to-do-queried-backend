const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv').config();
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //give us access to req.body

//create to do

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo);
  } catch (error) {
    console.error(err.message);
  }
});

//get all todos

//get a todo

//update a todo

app.listen(5000, () => {
  console.log(`server live on port 5000`);
});
