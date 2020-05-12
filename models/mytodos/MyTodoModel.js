const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mytodosSchema = new Schema({

    title: {
        type: String
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
    created_date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('mytodos', mytodosSchema)