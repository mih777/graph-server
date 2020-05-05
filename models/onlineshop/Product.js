const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    category: {
        type: String 
    },
    title: {
        type: String,
        required: 'Enter a name of todo'
    },    
    imageSrc: {
        type: String,
        default: ''
    },
    info: {
        type: String
    },
    price: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('products', productSchema)      