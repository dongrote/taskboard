'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskboard');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    require('./task');
    require('./user');
    require('./group');    
});
