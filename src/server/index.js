'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({host: 'localhost', port : 8080});

var preHandler = function(request,next){
    console.log('Recieved request for : ' + JSON.stringify(request.url.path));
    return next();
}

server.route({
    method: 'GET',
    path: '/{param*}',
    config: {
        pre: [{ method : preHandler }],
        handler: {
            directory: {
                path: 'public',
                index : true
            }
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

// export for testing
module.exports = server;
