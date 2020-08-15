const mongoose = require('mongoose')
const Schema = mongoose.Schema

const debtSchema = new Schema({


    hours: {
        type: Number
    },
    minutes: {
        type: Number
    },
    overtime: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
 
    
})

// const overtimePerDay = new Schema({
//     overtime: {
//         type: Number
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const minutesInMemory = new Schema({
//     hours: {
//         type: Number
//     },
//     minutes: {
//         type: Number
//     },
// })


module.exports = mongoose.model('debt', debtSchema)
// module.exports = mongoose.model('overtime_per_day', overtimePerDay)
// module.exports = mongoose.model('minutes_in_memory', minutesInMemory)