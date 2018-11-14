var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('../test/stage1/input.txt'); //创建可读流
readerStream.setEncoding('UTF8');

// S读取流
readerStream.on('data', function(chunk){ //回掉函数，异步  打印chunk会输出所有内容，不是每个流单元
  data += chunk;
  console.log(data);
});

readerStream.on('error', function(err){
  if(err){
    console.log('错误信息：'+err);
  }
})

readerStream.on('end', function(){
  console.log('文件流读取完毕');
});
// E读取流



// S写入流  会把原来的数据清除
var writeStream = fs.createWriteStream('../test/stage1/output.txt');
var writeData = '将要写入的数据：菜鸟教程官网地址-www.runoob.com';
writeStream.write(writeData, 'UTF8');
writeStream.end();
writeStream.on('finish', function(){
  console.log('写入数据完毕');
})
writeStream.on('error', function(err){
  console.log(err);
});
// E写入流

// S管道流
var writeStream2 = fs.createWriteStream('../test/stage1/output2.txt');
readerStream.pipe(writeStream2);
// E管道流
