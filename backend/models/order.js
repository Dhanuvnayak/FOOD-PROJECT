var mongoose = require('mongoose')
var orderSchema = mongoose.Schema({
    whichuser: {
        type: String,
    },
    food: {
        type  :Array,
        default:[]
    },
    total:{
        type:Number,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('order',orderSchema)
