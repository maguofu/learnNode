var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();


function readFileFun(url){
  fs.readFile(url, function(err, data){
    if(!err){
      data = data.toString();
      createHttpServer(data);
    }
  });
}

function createHttpServer(msg){
  http.createServer(function(req, res){
    res.writeHead(200, {
      'Content-Type': '*',
      'charset': 'UTF8'
    });
    res.end(msg);
  }).listen(8888);
}



eventEmitter.on('testName', function(){
  readFileFun('../test/stage1/input.txt');
});
eventEmitter.emit('testName');