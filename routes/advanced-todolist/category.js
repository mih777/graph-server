const express = require('express')
const controller = require('../../controllers/advanced-todolist/categoryController')
const router = express.Router()

router.get('/', controller.getCategories)
// router.get('/:id', controller.getOneById)
// router.get('/cat/:category', controller.getByCategory)
router.post('/create', controller.createCategory)
router.delete('/delete/:id', controller.deleteCategory)
// router.put('/update/:id', controller.updateTodo)
// router.put('/update/complete/:id', controller.updateCompleted)
// router.put('/update/expire/:id', controller.updateExpire)


module.exports = router