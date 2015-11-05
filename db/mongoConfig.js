var mongoose = require('mongoose');

var host = process.env.HOST || 127.0.0.1;
var port = process.env.PORT || 4568;


var Schema = mongoose.Schema;

var Users = new Schema({
  username: String,
  password: String
});

var Urls = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});

module.exports = mongoose.createConnection('mongodb://' + host + ':' + port);

