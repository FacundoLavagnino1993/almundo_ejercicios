/**
 * Created by Josue on 22/11/16.
 */
(function() {
    'use strict';

    angular
        .module('todos')
        .component('todo', {
            bindings: {
                item: '<',
                onChange: '&',
                onRemove: '&'
            },
            templateUrl:"todos/todo-list/todo/todo.html"
        });


})();

