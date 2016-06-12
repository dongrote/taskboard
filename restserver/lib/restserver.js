"use strict";
var express = require('express'),
    routes = [
        require('./routes/index')
    ];

function RESTServer(listenPort) {
    var app = express();
    routes.forEach( (val) => {
        val.forEach( (routePathAndHandler) => {
            var path = routePathAndHandler[0],
                handler = routePathAndHandler[1];
            app.all(path, handler);
        });
    });
    app.listen(listenPort, () => {
        console.log('[-] listening on %d', listenPort);
    });
}

module.exports = RESTServer;
