"use strict";
var util = require('util');

function handleGet(req, res) {
    res.writeHead(200);
    res.write(util.format('%j\n', this));
}

function handlePost(req, res) {

}

function handlePut(req, res) {

}

function handleDelete(req, res) {

}

function taskHandler(req, res) {
}

exports = module.exports = {
    path: '/task',
    handler: (req, res) => {
        switch (req.method) {
            case "GET":
                handleGet(req, res);
                break;
            case "POST":
                handlePost(req, res);
                break;
            case "PUT":
            case "UPDATE":
                handlePut(req, res);
                break;
            case "DELETE":
                handleDelete(req, res);
                break;
            default:
                res.writeHead(400);
        }
        res.write(util.format('%j\n',this));
        res.end();
    }
};
