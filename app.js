const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Todo = require('./models/todo')
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

// Set engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// Set route
app.get('/', (req, res) => {
  // Get all todos
  Todo.find() // 找出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JS 資料陣列
    .then(todos => res.render('index', { todos }) // transport to index
    .catch(error => console.error(error)) // 錯誤處理
  )
})

app.listen(port, () => {
  console.log(`App is running on https://localhost:${port}`)
})