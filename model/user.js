var mongoose = require('mongoose');
var model = mongoose.model('usermodel', user);
var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

var model = mongoose.model('usermodel', user);
module.exports = model;

