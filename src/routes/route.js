const express = require('express')
const route = express.Router()
const contactController = require('../controllers/contactController')

route.get('/', contactController.contact)
route.get('/contact/hapus/:nama', contactController.hapusContact)
route.get('/contact/edit/:nama', contactController.editContactPage)
route.get('/contact/:nama', contactController.detailContact)

// route for server
route.post('/saveContact', contactController.saveContact)
route.post('/editContact', contactController.editContact)


route.get('*', contactController.page404)

module.exports = route