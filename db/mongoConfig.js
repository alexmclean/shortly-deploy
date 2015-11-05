var mongoose = require('mongoose');

var host = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || '';
var user = process.env.DBUSER || '';
var password = process.env.DBPASSWORD || '';
var database = process.env.DBDATABASE || 'shortlydb'

mongoose.connect('mongodb://' + user + ':' + password + '@' + host + ':' + port + '/' + database);
var db = mongoose.connection

db.on('error', console.error.bind(console, "error connecting"));
db.on('open', function() {
  console.log("We are in Mongo DB!");
});

module.exports = db;
