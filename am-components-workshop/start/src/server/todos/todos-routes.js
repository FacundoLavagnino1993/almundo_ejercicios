const Router = require('co-router');
const router = Router();
const todos = require('./todos-controller.js'); //llamamos al controlador para acceder al getTodo();


router.get('/', todos.getTodos);
router.post('/', todos.addTodos);
router.put('/',todos.completeTodos);
router.delete('/',todos.removeTodos);

module.exports = router;