const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');



//Connect to database
mongoose.connect("mongodb://localhost/todos");

//Get the default connection
const db = mongoose.connection;

//Bin connection to error event (to get notification of connection errors)
db.on('error',console.error.bind(console, 'MongoDB connection error'));


//App Routes
app.use('/static', express.static('build'));

app.use('/', function (req, res, next){
    res.sendFile(path.join(__dirname + './../../build/index.html'));
});

// API routes Async

app.use('/todos', require('./todos/todos-routes'));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port);
console.log("app run on port "+port);

