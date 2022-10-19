const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3010;
const path = require('path');

mongoose.connect('mongodb://localhost:27017/bookworm');
var db = mongoose.connection;

app.set('view engine', 'pug');
// app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
