(function () {
    //invocate strict mode.
    'use strict';

    angular
        .module('todos')
        .service('TodosService', TodosService);

        TodosService.$inject = [];


        function TodosService() {

            this.getTodos = getTodos;
            this.addTodos = addTodos;
            this.completeTodos = completeTodos;
            this.removeTodos = removeTodos;


            var todoList = [{
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

            function getTodos() {
                return todoList;

            }


            function addTodos(label) {

                todoList.push({label:label,id:todoList.length + 1});
                return todoList;
            }

            function completeTodos(id) {

               todoList = todoList.map(function (item) {
                    return item.id === id ? Object.assign({}, item, {complete: true}) : item
                });
                return todoList;
            }

            function removeTodos(id) {

               todoList = todoList.filter(function(item) {
                    return id !== item.id;
                });
                return todoList;
            }




        }
        
})();