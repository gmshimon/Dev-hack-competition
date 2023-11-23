const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
var bodyParser = require('body-parser')

const port = 5000 || PROCESS.ENV.PORT
const path = require('path')

//middleware
const app = express()
app.use(express.json())
app.use(cors())

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/Dev-hack').then(() => {
  console.log('Database connected successfully')
})

const userRouter = require('./Models/User/user.route')
const propertyRouter = require('./Models/Property/property.route')

app.get('/', (req, res) => {
  res.send('Welcome to Jom Tapau')
})

app.listen(port, () => {
  console.log('Listening on port', port)
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/property', propertyRouter)
})
