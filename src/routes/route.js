const express = require('express')
const router = express.Router()

// use controller
const controller = require('../controllers/controller')

router.get('/', controller.index)

module.exports = router