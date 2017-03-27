/**
 * Created by Josue on 22/11/16.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .service('TodosService', TodosService);

    TodosService.$inject = [];

    /* @ngInject */
    function TodosService() {
        this.getTodos = getTodos;

        ////////////////

        function getTodos() {
            return [{
                label: 'Eat pizza',
                id: 0,
                complete: true
            }, {
                label: 'Do some coding',
                id: 1,
                complete: true
            }, {
                label: 'Sleep',
                id: 2,
                complete: false
            }, {
                label: 'Print tickets',
                id: 3,
                complete: true
            }];
        }
    }

})();

