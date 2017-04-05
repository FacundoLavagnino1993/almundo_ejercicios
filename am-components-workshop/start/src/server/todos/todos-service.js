const TodoSchema = require('./todos-model');

class TodosService{

    //Get All Todos
    static get(){
        return TodoSchema.find();
    }
}

module.exports = TodosService;