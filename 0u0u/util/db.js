var mysql = require('mysql');

var DBoptions = {
  host:'192.168.0.33',
  port:'3306',
  user:'jungmin',
  password:'kjmds17',
  database : 'kongukongu'
};

module.exports = mysql.createConnection(DBoptions);
