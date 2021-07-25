const mongoose = require('mongoose')
const Todo = require('../todo') // 載入 todo model

// connect to mongodb with mongoose
mongoose.connect('mongodb://localhost/todo-list',{ useNewUrlParser: true, useUnifiedTopology: true })

// check mongoose connected
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('monogodb connected!')

  // create 10 data
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: 'name-' + i })
  }
  console.log('done')
})
