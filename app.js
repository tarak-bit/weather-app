const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const weatherRoutes = require('./routes/weatherRoutes')
const globalErrorHandler = require('./middleware/errorMiddleware')

const app = express()

//developmenmt logs
app.use(morgan('dev'))

//for security headers
app.use(helmet())

//parsing body
app.use(express.json({limit:'10kb'}))

//Routes
app.use('/api/v1/weather', weatherRoutes)

//global error handler
app.use(globalErrorHandler)

module.exports = app
