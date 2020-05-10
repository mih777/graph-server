const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

    title: {
        type: String,
        required: 'Enter a name of todo'
    }   
    

})


module.exports = mongoose.model('my-todo-categories', categorySchema)