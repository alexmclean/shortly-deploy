
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');
// var db = require('../db/mongoConfig');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String
});

var User = mongoose.model('user', userSchema);


userSchema.pre('save', function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

User.comparePassword = function(attemptedPassword, userPass, callback) {
  bcrypt.compare(attemptedPassword, userPass, function(err, isMatch) {
    if(err){
      callback(err);
    } else {
      callback(null, isMatch);
    }
  });
};

module.exports = User;
