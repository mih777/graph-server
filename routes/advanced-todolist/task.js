const express = require('express')
const controller = require('../../controllers/advanced-todolist/taskController')
const router = express.Router()

router.get('/', controller.getAllTasks)
// router.get('/:id', controller.getOneById)
// router.get('/cat/:category', controller.getByCategory)
router.post('/create', controller.createTask)
router.delete('/delete/:id', controller.deleteTask)
// router.put('/update/:id', controller.updateTodo)
// router.put('/update/complete/:id', controller.updateCompleted)
// router.put('/update/expire/:id', controller.updateExpire)


module.exports = router