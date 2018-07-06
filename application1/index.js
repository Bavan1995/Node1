var http = require("http");
var express=require("express")
var app=express();


http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end("Welcome to World of programming")
   

}).listen(8081);

app.get('/tech', (req, res) => res.send('Tech World!'))


// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

