"use strict";
var listenPort = undefined == process.argv[2] && 8000 || parseInt(process.argv[2]);
require('./lib/restserver')(listenPort);
