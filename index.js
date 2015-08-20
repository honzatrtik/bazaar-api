var express = require('express');
var app = express();

app.use('/doc', express.static(__dirname + '/doc'));

var server = app.listen(process.env.PORT || 3000, function() {
   console.log('Server is running.');
});