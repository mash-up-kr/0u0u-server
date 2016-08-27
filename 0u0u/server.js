var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', user);

app.listen(8080, function () {
  console.log('listening on 0u0u sever 8080 port');
});
