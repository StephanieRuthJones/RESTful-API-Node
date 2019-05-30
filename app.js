const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    })
}) //sets up middleware - can pass arrow function

module.exports = app