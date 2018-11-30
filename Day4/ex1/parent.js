const http = require('http');
const url =  require('url');
const pathLib = require('path');
const querystring = require('querystring');
const {fork} = require('child_process');
const server = http.createServer();

server.on('request', (req,res) =>{
    const qstring = url.parse(req.url, true);
    const zfile = qstring.query.url;
    const childProcess = fork(pathLib.resolve(__dirname,'child.js'));
    childProcess.send(zfile);
    childProcess.on('message', zcontent => {
        res.end(zcontent);
    });
    });
server.listen(1947);