const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.toggleComplete);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
