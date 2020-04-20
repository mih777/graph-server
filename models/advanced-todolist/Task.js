const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({

    title: {
        type: String
    },
    status: {
        type: Boolean
    },
    priority: {
        type: String
    },
    color: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }


})


module.exports = mongoose.model('tasks', taskSchema)