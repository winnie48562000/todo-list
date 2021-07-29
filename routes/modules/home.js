const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  // Get all todos
  Todo.find() // 找出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JS 資料陣列
    .sort({ _id: 'asc' }) // Mongoose排序功能：asc 正序、desc 反序
    .then(todos => res.render('index', { todos }) // transport to index
    .catch(error => console.error(error)) // 錯誤處理
  )
})

module.exports = router