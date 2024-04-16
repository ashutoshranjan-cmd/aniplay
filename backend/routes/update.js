const express = require('express')
const router = express.Router()

const {updateUser} = require('../controllers/updateController')

router.put('/update',updateUser)

module.exports = router
