const mongoose = require('mongoose')

const Contact = mongoose.model('Contact', {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    nohp: {
        type: String
    },
    email: {
        type: String
    },
    notes: {
        type: String
    }
})

module.exports = Contact
















// const Contact = require('../../config/db')

// const createContact = (nama, nohp, email) => {
//     const saves = new Contact({
//         nama,
//         nohp,
//         email
//     })

//     saves.save().then((result) => console.log(result))
// }

// module.exports = createContact