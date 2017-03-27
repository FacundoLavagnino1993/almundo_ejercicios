/**
 * Created by Josue on 22/11/16.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .component('todoList', {
            bindings: {
                todos: '<',
                onComplete: '&',
                onDelete: '&'
            },
            templateUrl: "todos/todo-list/todo-list.html"
        });




})();

