"use strict";

function handleGet(req, res) {

}

function handlePost(req, res) {

}

function handlePut(req, res) {

}

function handleDelete(req, res) {
    
}

function taskHandler(req, res) {
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
    res.end();
}

module.exports = [
    ['/task', taskHandler]
];
