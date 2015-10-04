var http = require('http');
//var debug = require('debug')('server');


var server = http.createServer();


//debugger;
//node --debug-brk server.js + node-inspector

//server.on('request', require('./requestDebug'));
server.on('request', require('./requestWinston'));



//server.listen(1336, '127.0.0.1');
server.listen(1336);

//debug("server is running");

//NODE_DEBUG="http net" node server.js очоч глубокий дебаг