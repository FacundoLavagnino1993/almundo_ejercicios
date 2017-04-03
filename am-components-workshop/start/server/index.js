const express = require('express');
const app = express();
const port = 8080;
//const bodyParser = require('body-parser');

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));*/

app.get('/', function(req,res,next){
   res.send("Conection established");
});

app.listen(port);
console.log("app run on port "+port);

