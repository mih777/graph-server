const express = require('express')
const controller = require('../../controllers/onlineShop/auth')
const adminController = require('../../controllers/onlineShop/admin-auth')
const router = express.Router()

// localhost:5000/api/auth/login
router.post('/login', controller.login)

// localhost:5000/api/auth/register
router.post('/register', controller.register)


// localhost:5000/api/auth/login
router.post('/admin-login', adminController.login)

// localhost:5000/api/auth/register
router.post('/admin-register', adminController.register)


module.exports = router