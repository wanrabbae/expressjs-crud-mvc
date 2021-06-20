// const createContact = require('../models/contactModel')
const Contact = require('../models/contactModel')

// Pages
const contact = async (req, res) => {
    const contact = await Contact.find()
    res.render('contact', {
        layout: 'layout/template',
        contact,
        msg: req.flash('msg')
    })
}

const detailContact = async (req, res) => {
    const contact = await Contact.findOne({
        firstName: req.params.nama
    })

    res.render('contact/detail', {
        layout: 'layout/template',
        contact,
        msg: req.flash('msg')
    })
}

const page404 = (req, res) => {
    res.send('<h2>Error 404!</h2>')
}

// server

// create
const saveContact = async (req, res) => {
    // insert to mongodb
    await Contact.create({
        firstName: req.body.fn,
        lastName: req.body.ln,
        nohp: req.body.nohp,
        email: req.body.email,
        notes: req.body.notes
    })
    req.flash('msg', 'Data kontak berhasil ditambahkan!')
    res.redirect('/')

}

// edit
const editContact = async (req, res) => {
    await Contact.updateOne({
        _id: req.body.id
    }, {
        $set: {
            firstName: req.body.fn,
            lastName: req.body.ln,
            nohp: req.body.nohp,
            email: req.body.email,
            notes: req.body.notes
        }
    })
    req.flash('msg', 'Data kontak berhasil diubah!')
    res.redirect(`/contact/${req.body.fn}`)
}


// delete
const hapusContact = async (req, res) => {
    await Contact.deleteOne({
            firstName: req.params.nama
        })
        .then(() => req.flash('msg', 'Data berhasil dihapus!'))
        .catch((error) => req.flash('msg', error))

    res.redirect('/')
}

module.exports = {
    contact,
    page404,
    // editContactPage,
    saveContact,
    detailContact,
    hapusContact,
    editContact
}