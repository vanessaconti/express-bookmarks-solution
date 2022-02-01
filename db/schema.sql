-- step 1 incase we already have a db, drop it
DROP DATABASE IF EXISTS bookmarks_dev; 
-- step 2 create the db
CREATE DATABASE bookmarks_dev;
-- step 3 connect to the db
\c bookmarks_dev;
-- step 4 create a table for the db with these values
CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    isFavorite BOOLEAN,
    category TEXT,
    description TEXT
);