var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    util = require('util');


/* GET tasks listing. */
router.get('/', function(req, res, next) {
    var Task = mongoose.model('task'),
        stream = Task.find().stream(),
        taskids = [];
    stream.on('data', function (doc) {
        taskids.push(doc._id);
    }).on('error', function (err) {
        throw err;
    }).on('close', function () {
        res.send(taskids);
    });
});

router.post('/', function(req, res, next) {
    // create a new taskid, send it back to the client
    var Task = mongoose.model('task');
    Task.create({}, function (err, task) {
        if(err) throw err;
        res.send(task);
    });
});

module.exports = router;
