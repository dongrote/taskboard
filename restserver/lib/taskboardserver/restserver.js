'use strict';
var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes');

function TaskBoardServer () {
    this.express = express();
    this.mongoose = mongoose;
    routes.forEach( (val) => {
        this.express.all(val.path, val.handler);
    });
}

TaskBoardServer.prototype.listen = function (port, cb) {
    this.express.listen(port, cb);
};

TaskBoardServer.prototype.connect = function (uri) {
    this.mongoose.connect(uri);
};

exports = module.exports = new TaskBoardServer;
