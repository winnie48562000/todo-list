const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const todo = require('./models/todo')
const routes = require('./routes')
const app = express()
const port = 3000

require('./config/mongoose')

// Set engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})