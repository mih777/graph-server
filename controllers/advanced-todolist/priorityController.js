const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prioritySchema = new Schema({

    title: {
        type: String
    }

})


module.exports = mongoose.model('task-priority', prioritySchema)