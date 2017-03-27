(function () {
    //invocate strict mode.
    'use strict';

    angular
        .module('todos')
        .service('TodosService', TodosService);

        TodosService.$inject = [];


        function TodosService() {

            this.getTodos = getTodos;

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
        }
        
})();