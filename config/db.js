const mongoose = require('mongoose')
// .env
require('dotenv').config()

// connect mongodb
const urlMongo = process.env.MONGO_ATLAS_URI || process.env.MONGO_HOST

mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})