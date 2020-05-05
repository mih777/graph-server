const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const keys = require('./config/keys')
const authRoutes = require('./routes/onlineshop/auth')
const ProductRouter = require('./routes/onlineshop/product')
const GraphRouter = require('./routes/graph')
const ToDoRouter = require('./routes/todo')
const TaskRouter = require('./routes/advanced-todolist/task')
const CategoryRouter = require('./routes/advanced-todolist/category')

const app = express()

mongoose.connect(keys.mongoURI,
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
  )
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error)) 
   
mongoose.set('useFindAndModify', false)

app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', ProductRouter)
app.use('/api/graph', GraphRouter)
app.use('/api/todos', ToDoRouter)
app.use('/api/tasks', TaskRouter)
app.use('/api/categories', CategoryRouter)


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/client'))

  app.get('*', (req, res) => {
      res.sendFile(
          path.resolve(
              __dirname, 'client', 'dist', 'client', 'index.html'
          )
      )
  })
}


module.exports = app