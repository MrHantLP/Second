var url = require('url');

var log = require('./log.js')(module);


module.exports = function (req, res) {

    var urlParsed = url.parse(req.url, true);
    log.info("Got request", req.method, req.url);



    if ((req.method == 'GET') && (urlParsed.pathname = '/echo' && urlParsed.query.message)) {
        var message = urlParsed.query.message;
        log.debug("Echo: " + message);
        /*res.setHeader('Cache-control', 'no-cache');
         res.statusCode=200; //default stnatus*/

        res.end(message);
        return;
    }

    log.error("Unknown URLL");
    res.statusCode = 404;
    res.end("Page not found");
};