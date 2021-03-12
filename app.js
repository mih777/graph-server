const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const keys = require('./config/keys')
const authRoutes = require('./routes/onlineshop/auth')
const ProductRouter = require('./routes/onlineshop/product')
const GraphRouter = require('./routes/graph')
const ToDoRouter = require('./routes/todo')
const CategoryRouter = require('./routes/mytodos/mytodoRoutes')
const MyTodoRouter = require('./routes/mytodos/mytodoRoutes')
const DebtRouter = require('./routes/debt-route/debt-route')
const CustomerRouter = require('./routes/customers/customer')

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
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/auth', authRoutes)
app.use('/api/products', ProductRouter)
app.use('/api/customer', CustomerRouter)
app.use('/api/graph', GraphRouter)
app.use('/api/todos', ToDoRouter)
app.use('/api/debt', DebtRouter)
app.use('/api/mytodos', MyTodoRouter)
app.use('/api/mytodo-categories', CategoryRouter)


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