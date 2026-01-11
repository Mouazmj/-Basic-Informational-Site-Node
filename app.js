const express = require('express')

const app = express()

app.get('/', (res, req) => {
    res.send('<p>Home page</p>')
})