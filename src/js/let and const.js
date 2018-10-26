
//let 和 const 命令
 
{
    var a = 1;
    let b = 2;
    const c = 1;
    console.log(`b=${b}`);  //b=2
    console.log(`c=${c}`);  //c=1
}

console.log(`a=${a}`);  //a=1
console.log(`b=${b}`);  //Uncaught ReferenceError: b is not defined
console.log(`c=${c}`);  //Uncaught ReferenceError: c is not defined

