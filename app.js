const morgan = require('morgan')
const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')
const singleDelegateRouter = require('./controllers/singleDelegate')
const doubleDelegateRouter = require('./controllers/doubleDelegate')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const ticketRouter = require('./controllers/tickets')

mongoose.connect(process.env.TICKET_MONGO_DB)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan('morgan :method :url :status :res[content-length] - :response-time ms :body'))

app.use('/api/singleDelegates', singleDelegateRouter)
app.use('/api/doubleDelegates', doubleDelegateRouter)
app.use('/api/tickets', ticketRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app