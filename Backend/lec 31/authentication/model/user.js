const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})

const users = mongoose.model('users',userSchema);

module.exports = users;