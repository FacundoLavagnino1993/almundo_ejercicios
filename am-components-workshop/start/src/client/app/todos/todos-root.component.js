
(function (){

    'use strict';

    angular
        .module('todos')
        .component('todosRoot', {
            controller:TodosController,
            templateUrl: "todos/todos-root.html"
        });

    TodosController.$inject = ['TodosService'];


    function TodosController(TodosService) {

        var _self = this;


        this.$onInit = function () {
            //_self.todos = TodosService.getTodos();
            TodosService.getTodos().then(function done(response){
                _self.todos = response;
            }, function fail(error){
                console.log(error);
            });

        };

        this.addTodo = function ($event) {
            var label = $event.label;
            _self.todos = TodosService.addTodos(label);

        };


        this.completeTodo = function ($event) {
            var id = $event.todo.id;
            _self.todos = TodosService.completeTodos(id);

        };


        this.removeTodo = function ($event) {
            var id = $event.todo.id;
            _self.todos = TodosService.removeTodos(id);

        };
    }
})();