
'use strict';

const TodosService = require('./todos-service');

class TodosController{


  static getTodos(req, res, next){

    TodosService.get()
        .then(function (todos) {
            res.json(todos);
        });

  }

  static addTodos(req, res, next){

    TodosService.add(req.body.label)
        .then(function (todos){
            res.json(todos);
        });
  }

  static completeTodos(req, res, next){

      TodosService.complete(req.body.label)
          .then(function (todos){
              console.log("item "+req.body.label+" was complete. ");
              res.json(todos);
          });


  }

    static removeTodos(req, res, next){

        TodosService.remove(req.body.label)
            .then(function (todos){
                console.log("item "+req.body.label+" was remove. ");
                res.json(todos);
            });


    }

}

module.exports = TodosController;