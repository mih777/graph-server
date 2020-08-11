const mongoose = require('mongoose')
const Schema = mongoose.Schema

const debtSchema = new Schema({

    money: {
        type: Number
    },
    days: {
        type: Number
    },
    minutes: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }

   
    
})


module.exports = mongoose.model('debt', debtSchema)