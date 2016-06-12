"use strict";

var root = require('./root'),
    tasks = require('./tasks');

module.exports = [
    {path: root.path, handler: root.handler},
    {path: tasks.path, handler: tasks.handler}
];
