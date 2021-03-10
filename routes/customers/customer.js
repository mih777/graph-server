const express = require('express')
const controller = require('../../controllers/customers/customer')
const router = express.Router()

router.get('/customers', controller.getAllCustomers)

router.post('/create-customer', controller.createCustomer)

router.delete('/delete/:id', controller.deleteCustomer)



module.exports = router