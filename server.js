const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = process.env.PORT || '8000';
const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public/dist')));
// ============= BE SURE TO CHANGE DATABASE NAME =======================
require('./server/config/mongoose.js')
//make sure to check the route file to make changes
require("./server/config/routes.js")(app);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.redirect('/')
});
app.listen(port, '172.31.72.41');
