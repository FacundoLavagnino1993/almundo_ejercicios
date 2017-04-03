const Router = require('co-router');
const router = Router();
const todos = require('./todos-controller.js'); //llamamos al controlador para acceder al getTodo();


router.get('/', todos.getTodos);

module.exports = router;