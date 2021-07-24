const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// connect to mongodb with mongoose
mongoose.connect('mongodb://localhost/todo-list',{ useNewUrlParser: true, useUnifiedTopology: true })

// check mongoose connected
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('monogodb connected!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is running on https://localhost:${port}`)
})