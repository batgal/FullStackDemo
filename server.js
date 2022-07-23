const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "camuser",
    password: "Root1234",
    database: "books_db",
  },
  console.log("Connected to the db.")
);

db.query("select * from favorite_books", (err, results) => {
  console.log(results);
  res.json(results);
});

app.get("/books", (req, res) => {
  res.json("Some books");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
