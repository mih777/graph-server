const express = require('express')
const category_controller = require('../../controllers/mytodolist/todoCategoryController')
const controller = require('../../controllers/mytodolist/myTodoController')
const router = express.Router()

router.post('/create-category', category_controller.create)
router.get('/categories', category_controller.getAllCategories)

router.get('/', controller.getAllTodos)
router.get('/:id', controller.getOneById)
router.get('/cat/:category', controller.getByCategory)
router.post('/create', controller.create)
router.delete('/delete/:id', controller.deleteTodo)
router.put('/update/:id', controller.updateTodo)
router.put('/update/complete/:id', controller.updateCompleted)
//router.put('/update/expire/:id', controller.updateExpire)


module.exports = router