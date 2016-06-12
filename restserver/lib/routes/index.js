"use strict";

function indexHandler(req,res) {
    res.writeHead(200);
    res.write('This is a test\n');
    res.end();
}

module.exports = [
    ['/', indexHandler]
];
