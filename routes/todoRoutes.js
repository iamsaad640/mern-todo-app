const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.toggleComplete);
router.put('/:id/edit', todoController.editTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
