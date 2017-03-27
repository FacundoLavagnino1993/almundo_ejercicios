/**
 * Created by Josue on 22/11/16.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .component('todoForm', {
            controller: TodoFormController,
            bindings: {
                onAdd: '&'
            },
            templateUrl: "todos/todo-form/todo-form.html"
        });


    TodoFormController.$inject = [];

    /* @ngInject */
    function TodoFormController() {

        this.$onInit = function () {
            //all initialisation code for the Controller, consider it a constructor

        };

        this.submit = function (label) {
            if (!this.label) return;
            this.onAdd({
                $event: {label: this.label}
            });
            this.label = '';
        };

        this.$postLink = function () {

        };

        this.$onChanges = function (changes) {

        };
    }

})();

