const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

    title: {
        type: String
    }    
    
})


module.exports = mongoose.model('mytodo-categories', categorySchema)