//Require mongoose
const  mongoose = require('mongoose');

//Define a schema

const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    label       : String,
    complete    : Boolean
});



module.exports = mongoose.model('Todo',TodosSchema);
