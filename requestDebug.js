var url = require('url');


var debug = require('debug')('server:request');


module.exports = function (req, res) {

    var urlParsed = url.parse(req.url, true);
    debug("Got request", req.method, req.url);


    if ((req.method == 'GET') && (urlParsed.pathname = '/echo' && urlParsed.query.message)) {
        var message = urlParsed.query.message;
        debug("Echo: " + message);
        /*res.setHeader('Cache-control', 'no-cache');
         res.statusCode=200; //default stnatus*/

        res.end(message);
        return;
    }

    debug("Unknown URLL");
    res.statusCode = 404;
    res.end("Page not found");
};