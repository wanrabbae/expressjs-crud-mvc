// Pembuat = Akhmad Alwan X RPL
const express = require('express')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const router = require('./src/routes/route')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// mongo
require('./config/db')

// env
require('dotenv').config()

const app = express()
const port = process.env.PORT

// setup ejs
app.set('view engine', 'ejs')
app.use(expressLayout)

// set public
app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

// konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
    cookie: {
        maxAge: 6000
    },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
app.use('/', router)

app.listen(port, () => console.log(`Run in http://localhost:${port}`))