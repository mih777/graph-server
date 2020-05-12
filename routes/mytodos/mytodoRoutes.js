const express = require('express')
const controller = require('../../controllers/mytodos/mytodoController')
const categoryController = require('../../controllers/mytodos/mytodoCategory')
const router = express.Router()

router.get('/categories', categoryController.getAllCategories)
router.post('/create-category', categoryController.createCategory)


router.get('/', controller.getAllTodos)
router.get('/:id', controller.getOneTodoById)
router.get('/cat/:category', controller.getTodoByCategory)
router.post('/create', controller.createTodo)
router.delete('/delete/:id', controller.deleteTodo)
router.put('/update/todo/:id', controller.updateTodo)
router.put('/update/complete/:id', controller.updateCompleted)



module.exports = router