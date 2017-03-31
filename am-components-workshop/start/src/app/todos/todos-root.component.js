
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
            _self.todos = TodosService.getTodos();
        };

        this.addTodo = function ($event) {
            var label = $event.label;
            _self.todos = TodosService.addTodos(label, _self.todos);

        };


        this.completeTodo = function ($event) {
            var todo = $event.todo;
            _self.todos = TodosService.completeTodos(todo, _self.todos);

        };


        this.removeTodo = function ($event) {
            var todo = $event.todo;
            _self.todos = TodosService.removeTodos(todo, _self.todos);

        };
    }
})();