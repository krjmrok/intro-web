
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('DB接続失敗:', err);
    return;
  }
  console.log('MySQLに接続成功！');
});

app.use(express.static('public'));

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('クエリ失敗');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log("http://localhost:3000 でサーバー起動中");
});
