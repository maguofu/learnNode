var fs = require('fs');

// 阻塞式编程（代码一行行执行）
var data = fs.readFileSync('../test/stage1/input.txt');
// console.log(data.toString());

// 非阻塞式编程（异步）
fs.readFile('../test/stage1/input.txt', function(err, res){
  if(err){
    console.log(err);
  }else{
    console.log(res.toString());
  }
  // console.log(err, res.toString());
});


console.log('程序结束');