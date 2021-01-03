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

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//get all todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (error) {
    console.error(err.message);
  }
});

//get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log(`server live on port 5000`);
});
