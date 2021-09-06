var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var order= new Schema({
    status:Number,
    price:Number,
    orders:Object,
    shippingInfo:Object,
    customerInfo:Object,
    email:String,
    orderCode:String
})
 var orderHistory = mongoose.model("Orders",order)
 module.exports = orderHistory