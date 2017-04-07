(function () {
    //invocate strict mode.
    'use strict';

    angular
        .module('todos')
        .service('TodosService', TodosService);


        TodosService.$inject = ['$http'];

        function TodosService($http) {

            this.getTodos = getTodos;
            this.addTodos = addTodos;
            this.completeTodos = completeTodos;
            this.removeTodos = removeTodos;


            function getTodos() {
                return $http.get('/todos')
                    .then(function (response) {
                        return response.data;
                    });
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