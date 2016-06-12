"use strict";
var express = require('express');

module.exports = function (listenPort) {
    var app = express();
    app.listen(listenPort, () => {
        console.log('[-] listening on %d', listenPort);
    });
}
