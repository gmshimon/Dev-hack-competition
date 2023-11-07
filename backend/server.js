const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')

const port = 5000 || PROCESS.ENV.PORT
const path = require('path')

//middleware
const app = express()
app.use(express.json())
app.use(cors())

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/Jom-tapau').then(() => {
  console.log('Database connected successfully')
})

app.get('/', (req, res) => {
  res.send('Welcome to Jom Tapau')
})

app.listen(port, () => {
  console.log('Listening on port', port)
})
