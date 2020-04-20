const express = require('express')
const controller = require('../controllers/todoController')
const router = express.Router()

router.get('/', controller.getAllTodos)
// router.get('/:id', controller.getOneById)
// router.get('/cat/:category', controller.getByCategory)
// router.post('/create', controller.create)
// router.delete('/delete/:id', controller.deleteTodo)
// router.put('/update/:id', controller.updateTodo)
// router.put('/update/complete/:id', controller.updateCompleted)
// router.put('/update/expire/:id', controller.updateExpire)


module.exports = router