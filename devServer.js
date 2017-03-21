var path = require('path');
var express = require('express');
var webpack = require('webpack');
var routes = require("./controller/controller.js");
var PORT = process.env.PORT || 7770;

var app = express();

app.use(express.static("./public"));


app.use('/', routes);

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at '+PORT);
});
