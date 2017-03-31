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

            function getTodos() {

                return [{
                    label: 'Codear',
                    id: 0,
                    complete: true,
                }, {
                    label: 'Codear de nuevo',
                    id: 1,
                    complete: true,
                }, {
                    label: 'seguir codeando',
                    id: 2,
                    complete: false
                }];
            }


            function addTodos(label, todosList) {

                todosList.push({label:label,id:todosList.length + 1});
                return todosList;
            }

            function completeTodos(todo, todosList) {

               todosList = todosList.map(function (item) {
                    return item.id === todo.id ? Object.assign({}, item, {complete: true}) : item
                });
                return todosList;
            }

            function removeTodos(todo, todosList) {

               todosList = todosList.filter(function(item) {
                    return todo.id !== item.id;
                });
                return todosList;
            }




        }
        
})();