"use strict";
var listenPort = process.argv[2] && parseInt(process.argv[2]) || 8000;
var tbserver = require('./lib/taskboardserver');
tbserver.listen(listenPort, function () {
    console.log('listening on %d', listenPort);
});
