//字符串的扩展

//ES6新增3个检查方法

let s = 'Hello world!';

// console.log(s.includes("wor"));
// console.log(s.startsWith("hello"));
// console.log(s.endsWith("!"));

{
    let s = 'Hello world!';

    s.startsWith('world', 6) // true
    s.endsWith('Hello', 5) // true
    s.includes('Hello', 6) // false
}


//ES2017 字符串补全方法 padStart()、padEnd

// console.log('x'.padStart(5, 'ab'));
// console.log('x'.padEnd(5, 'ab'));
// console.log('x'.padStart(4, 'ab'));
// console.log('x'.padEnd(4, 'ab'));


//模板字符串
console.log(
`hello
world
!
`
);

//嵌入变量
let name = "张无忌";
console.log(`hello ${name}!`);

// 变量place没有声明
// let msg = `Hello, ${place}`;  //报错

