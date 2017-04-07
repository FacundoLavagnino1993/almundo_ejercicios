const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//Connect to database
mongoose.connect("mongodb://localhost/test");
//Get the default connection
const db = mongoose.connection;

//Bin connection to success
db.on('connected',()=>{console.log('Mongoose default connection open to mongodb://localhost/todos');});
//Bin connection to error event (to get notification of connection errors)
db.on('error',console.error.bind(console, 'MongoDB connection error'));

app.use('/static', express.static('./../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API routes Async
app.use('/todos', require('./todos/todos-routes'));

//App Routes
app.use('/', function (req, res, next){
      //  res.send(s"conection");
    res.sendFile(path.join(__dirname + './../../build/index.html'));
});

app.listen(port,()=>{
    console.log("app run on port "+port);
});


