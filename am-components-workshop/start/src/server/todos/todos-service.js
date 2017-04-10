'use strict';
const TodosModel = require('./todos-model');

class TodosService{

    //Get All Todos
    static get(){
        return TodosModel.find();
    }

    //Add Todo
    static add(label){
        //Creamos obj TodosModel, le asignamos valores.

        var item = new TodosModel();
        item.label = label;
        item.complete = false;

        TodosModel.collection.insert(item);

        return TodosModel.find();
    }

    static complete(label){

        TodosModel.collection.update({"label" : label}, {$set: {"complete" : true}});
         return TodosModel.find();

    }

    static remove(label){

        TodosModel.collection.remove({"label" : label});
        return TodosModel.find();
    }

}

module.exports = TodosService;