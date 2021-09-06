var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var product = new Schema({
    image:String,
    name:String,
    price:Number,
    originPrice:Number,
    quantity:Number,
    type:Number,
    key:String,
    email:String
})
 var products = mongoose.model("Cart",product)
 module.exports = products