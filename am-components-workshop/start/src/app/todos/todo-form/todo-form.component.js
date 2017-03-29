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

    function TodoFormController() {

        this.submit = function (label) {
            if(!this.label) return;
            this.onAdd({
                $event: {label: this.label}
            });
            this.label = '';
        };

    }
})();