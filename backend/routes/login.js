const express = require('express')
const router2 = express.Router()

const {loginUser} = require('../controllers/loginController')

router2.post('/login',loginUser)

module.exports = router2
