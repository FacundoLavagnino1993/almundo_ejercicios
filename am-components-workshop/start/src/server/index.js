const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

// API routes
app.use('/todos', require('./todos/todos-routes'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port);
console.log("app run on port "+port);

