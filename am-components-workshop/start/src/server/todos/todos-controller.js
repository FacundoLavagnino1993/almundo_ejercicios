
'use strict';

class TodosController{


  static getTodos(req, res, next){

      const todos = [{
          label: 'Workshop',
          id: 0,
          complete: false,
      }, {
          label: 'Play Football',
          id: 1,
          complete: false,
      }, {
          label: 'watch Football',
          id: 2,
          complete: false
      }];

      res.json(todos);
}

}

module.exports = TodosController;