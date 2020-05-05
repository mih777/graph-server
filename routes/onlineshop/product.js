const express = require('express')
const upload = require('../../middleware/upload')
const controller = require('../../controllers/onlineShop/product')
const router = express.Router()

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getOneById)
router.get('/cat/:category', controller.getByCategory)
router.post('/create',upload.single('image'), controller.create)
//router.delete('/delete/:id', controller.deleteTodo)
router.put('/update/:id',upload.single('image'), controller.updateProduct)


module.exports = router