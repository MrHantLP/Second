/**
 * Created by MrHant on 05.10.2015.
 */

var winston = require('winston');

module.exports = function(module) {
    return makeLogger(module.filename);
};

function makeLogger(path) {
    if (path.match(/requestWinston.js$/)) {
        var transport = [
                new winston.transports.Console({
                timestamp: true,
                colorize: true,
                level: 'info'
            }),
            new winston.transports.File({filename: 'debug.log', level: 'debug'})
        ];
        return new winston.Logger({transports: transport});
    }
    else {
        return new winston.Logger({
            transports: []
        });
    }
}