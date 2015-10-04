/**
 * Created by MrHant on 05.10.2015.
 */
var http = require('http');

var url = require('url');

var server;

server = new http.Server(function (req, res) {
    console.log(req.method, req.url);
    console.log(req.headers);

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if ((urlParsed.pathname = '/echo' && urlParsed.query.message)) {
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end("PAge not found");
    }
});

server.listen(1336, '127.0.0.1');

//console.log("привет");
/*
var counter = 0;
server.on('request', function (req, res) {
    res.end("HELLO WORLD "+ ++counter);

});*/
