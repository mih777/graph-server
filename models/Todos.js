const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({

    title: {
        type: String,
        required: 'Enter a name of todo'
    },    
    description: {
        type: String,
        required: 'Enter a description of todo'
    },
    category: {
        type: String,
        required: 'Enter category'
    },
    completed: {
        type: Boolean,
        required: 'completed'
    },
    expired: {
        type: Boolean,
        required: 'expired'
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('todos', todoSchema)