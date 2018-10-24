
//let 使用
/* 
{
    var a = 1;
    let b = 2;
}

console.log(`a=${a}`);  //a=1
console.log(`b=${b}`);  //Uncaught ReferenceError: b is not defined
 */



var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

