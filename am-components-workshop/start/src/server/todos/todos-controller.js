
'use strict';

const TodosService = require('./todos-service');

class TodosController{


  static getTodos(req, res, next){

    const todosPromise = TodosService.get();

        todosPromise.then(function (todos) {
            res.json(todos);
        });

  }

}

module.exports = TodosController;