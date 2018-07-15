var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function(){
    console.log('Server Started')
});

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const listenFunction = (() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const serverFunction = ((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const server = http.createServer(serverFunction);

server.listen(port, hostname, listenFunction); */