const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mytodoSchema = new Schema({

    title: {
        type: String,
        required: 'Enter a name of todo'
    },    
    
    category: {
        type: String
    },

    description: {
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


module.exports = mongoose.model('mytodos', mytodoSchema)