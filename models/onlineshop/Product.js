const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    category: {
        type: String,
        //required: 'Enter a type of product'
    },
    title: {
        type: String,
        //required: 'Enter a name of product'
    },    
    imageSrc: {
        type: String,
        //required: 'add an image of product'
    },
    info: {
        type: String,
        //required: 'Enter an info of product'
    },
    description: {
        type: String,
        //required: 'Enter an info of product'
    },
    price: {
        type: String,
        //required: 'Enter a price of product'
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('products', productSchema)      