const express = require('express')
const route = express.Router()
const contactController = require('../controllers/contactController')

// root
route.get('/', contactController.contact)

// route.get('/contact/edit/:nama', contactController.editContactPage)

// Halaman Detail
route.get('/contact/:nama', contactController.detailContact)

// route for server
route.post('/saveContact', contactController.saveContact)
route.post('/editContact', contactController.editContact)
route.get('/contact/hapus/:nama', contactController.hapusContact)


route.get('*', contactController.page404)

module.exports = route