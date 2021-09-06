var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var user = new Schema({
    name:String,
    avatar:String,
    email:String,
    password:String
})
 var users = mongoose.model("Users",user)
 module.exports = users