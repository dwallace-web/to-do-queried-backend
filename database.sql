CREATE DATABASE perntodo;

-- reference todo id, spk means this is a unique todo

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
);