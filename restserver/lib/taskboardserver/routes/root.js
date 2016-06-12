'use strict';

exports = module.exports = {
    path: '/',
    handler: function (req, res) {
        res.writeHead(200);
        res.write('This is a test\n');
        res.end();
    }
};
