const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({

    title: {
        type: String,
        required: 'Enter a name of todo'
    },    
    description: {
        type: String
    },
    category: {
        type: String
    },
    completed: {
        type: Boolean
    },
    expired: {
        type: Boolean
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('todos', todoSchema)