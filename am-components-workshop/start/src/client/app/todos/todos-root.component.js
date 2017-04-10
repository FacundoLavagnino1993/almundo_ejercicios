
(function (){

    'use strict';

    angular
        .module('todos')
        .component('todosRoot', {
            controller:TodosController,
            require:{

            },
            templateUrl: "todos/todos-root.html"
        });

    TodosController.$inject = ['TodosService'];


    function TodosController(TodosService) {

        var _self = this;


        this.$onInit = function () {

            TodosService.getTodos().then(function done(response){
                _self.todos = response;
            }, function fail(error){
                console.log(error);
            });

        };

        this.addTodo = function ($event) {

            TodosService.addTodos($event)
                .then(function done(response){
                _self.todos = response;
            }, function fail(error){
                console.log(error);
            });

        };


        this.completeTodo = function ($event) {

            TodosService.completeTodos($event.todo)
                .then(function done(response){
                    _self.todos = response;
                }, function fail(error) {
                    console.log(error.data);
                });

        };


        this.removeTodo = function ($event) {

            TodosService.removeTodos($event.todo)
                .then(function done(response){
                    _self.todos = response;
                }, function fail(error){
                    console.log(error);
                });


        };
    }
})();