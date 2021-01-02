###Postgres CLI Commands
psql --version
`\l` view all databases in postgres
`\c {databasename} ` - 'you are connected', we can view all tables in the database

`\dt` - view all datatables in the database

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

query
INSERT INTO

```
const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($0)'
    );

```
