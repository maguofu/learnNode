var http = require('http');
var url = require('url');
// var route = require('./router.js');
var pathUrl;
function onRequire(req, res){
  pathUrl = url.parse(req.url).pathname;
  res.writeHead(200, {
    'Content-Type': '*',
    'charset': 'UTF8'
  });
  res.write('hello url is:'+pathUrl);
  res.end();
}
function start(){
  http.createServer(onRequire).listen(8888);
  console.log('Server is start');
  // route.route(pathUrl);
}

module.exports = {
  start: start
}