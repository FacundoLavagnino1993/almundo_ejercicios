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
                return $http.post('/todos',label)
                    .then(function (res){
                        console.log(label);
                        return res.data;
                    });

            }

            function completeTodos(label) {

                return $http.put('/todos',label)
                    .then(function (res){
                        return res.data;
                    });


            }

            function removeTodos(label) {

                return $http.delete('/todos',label)
                    .then(function (res){
                        return res.data;
                    });
            }




        }
        
})();