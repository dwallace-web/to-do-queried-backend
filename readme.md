###Postgres CLI Commands
`psql --version` - check version
`psql -U postgres` - login
`\l` view all databases in postgres
`\c {databasename}` - 'you are connected', we can view all tables in the database
`\dt` - view all datatables in the database

Get all information from the datatable:

```
SELECT * FROM todo;
```

###connect database to server

docs: https://node-postgres.com/api/pool

```
const pool = new Pool({
  user: 'postgres',
  password: process.env.password,
  port: 5432,
  database: 'perntodo',
});
```

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

COMMAND specific table DETAIL (specific column) VALUES($1 placeholder), second argument is the [description]

```
const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

```
