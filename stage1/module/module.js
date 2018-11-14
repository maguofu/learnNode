var fun = require('./module-test.js');
fun.a();
fun.b();
var car = new fun.Car('red');
car.sayColor();
// console.log(fun)