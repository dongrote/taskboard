"use strict";

var root = require('./root'),
    task = require('./task');

module.exports = [
    {path: root.path, handler: root.handler},
    {path: task.path, handler: task.handler}
];
