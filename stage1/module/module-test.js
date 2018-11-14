function a(){
  console.log('a');
}

function b(){
  console.log('b')
}

function Car(color){
  this.color = color;
  this.sayColor = function(){
    console.log('My color is '+color);
  }
}


module.exports = {
  a: a,
  b: b,
  Car: Car
}