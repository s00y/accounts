const express = require('express');
const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connected..!');
});
var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})
var Users = mongoose.model('users', userSchema);
Users.find(function (err, users){
    if(err) return console.error(err);
    console.log(users);
});

app.get('/', function (req, res) {
    res.send('Hello World!'); 
});

app.post('/auth/login', function (req, res) {
    console.log(req.body.email); 
    console.log(req.body.password);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });


  