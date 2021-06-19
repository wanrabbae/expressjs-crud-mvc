const express = require('express')
const ejs = require('ejs')

const port = 3000

// express app
const app = express()

// use ejs
app.set('view engine', 'ejs')

// use route
const routes = require('./src/routes/route')

app.use('/', routes)

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}...`)
})