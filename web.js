var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
buf = new Buffer(256);

buf=fs.readFileSync('index.html', 'utf8');
//function (err, data) 
//{
//  if (err) throw err;
//  len = buf.write(data,0);
//console.log("length" + len);  
console.log(buf.toString());
  
//  console.log(data);
//});

app.get('/', function(request, response) {
//  response.send('Hello World2 !');
response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
