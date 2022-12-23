var mongoose = require('mongoose')
var foodSchema = mongoose.Schema({
    
    foodname: {
        type: String,
      
    },
   
    foodprice: {
        type: Number,
      
    },
    foodimage: {
        type: String,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('food',foodSchema)
