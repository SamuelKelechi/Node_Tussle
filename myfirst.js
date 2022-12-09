var http = require('http');
var dt = require('./myfirstmodule');
var fs = require('fs');


http.createServer(function (req, res) {
  fs.readFile('Sam.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.appendFile('Sam.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}).listen(8070);




// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!')
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// var http = require('http');