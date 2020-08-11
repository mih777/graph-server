const express = require('express')
const controller = require('../../controllers/debt-calc/calController')
const router = express.Router()

//  /api/debt/create
router.post('/create', controller.create)

//  /api/debt/update/:id
router.put('/update/:id', controller.update)

//  /api/debt/get/debt/:id
router.get('/get/debt/:id', controller.getOneById)


module.exports = router