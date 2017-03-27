(function() {
    'use strict';
    angular
        .module('todos')
        .component('todo', {
            bindings: {
                item: '<',
                onChange: '&',
                onRemove: '&',
            },
            templateUrl:"todos/todo-list/todo/todo.html"
        });
})();