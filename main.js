var http=require('http');
var url=require('url');

var app=http.createServer(function(req,res) {
    res.writeHead(200);
    res.end("hello world");
});

app.listen(80,'127.0.0.1');