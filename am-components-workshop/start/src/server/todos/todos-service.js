'use strict';
const TodosModel = require('./todos-model');

class TodosService{

    //Get All Todos
    static get(){
        return TodosModel.find();
    }

}

module.exports = TodosService;