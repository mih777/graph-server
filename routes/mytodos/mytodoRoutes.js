const express = require('express')
const controller = require('../../controllers/mytodos/mytodoController')
const categoryController = require('../../controllers/mytodos/mytodoCategory')
const router = express.Router()

router.get('/categories', categoryController.getAllCategories)
router.post('/create-category', categoryController.createCategory)
router.delete('/delete-category/:id', categoryController.deleteCategory)


router.get('/', controller.getAllTodos)
router.get('/noparams', controller.getAllTodosNoParams)

router.get('/:id', controller.getOneTodoById)
router.get('/cat/:category', controller.getTodoByCategory)
router.get('/cat/:category/noparams', controller.getTodoByCategoryNoParams)


router.post('/create', controller.createTodo)
router.delete('/delete/:id', controller.deleteTodo)
router.delete('/delete-all/:category', controller.deleteTodoByCategory)
router.put('/update/todo/:id', controller.updateTodo)
router.put('/update/complete/:id', controller.updateCompleted)



module.exports = router