###Postgres CLI Commands
psql --version

psql -U postgres - login

`\l` view all databases in postgres
`\c {databasename}` - 'you are connected', we can view all tables in the database

`\dt` - view all datatables in the database

Get all information from the datatable:

```
SELECT * FROM todo;
```

###connect database to server
see db.js

###create endpoints with async functions

Basic structure:

```
app.post('/todos', async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(err.message);
  }
});
```

INSERT INTO - adds data
specific table -
specific column -
value of new row - variable
second argument is the [description]

```
const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

```
