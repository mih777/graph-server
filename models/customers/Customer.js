const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({

    name: {
        type: String 
    },
    email: {
        type: String,
        //required: 'Enter a name of todo'
    },    
    phone: {
        type: Number
    }

})


module.exports = mongoose.model('customers', customerSchema)      