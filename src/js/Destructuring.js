//变量的解构赋值

let arr = [1,2,34];
let [a,b,c] = arr;
//console.log(`a=${a};b=${b};c=${c}`);


let [head, ...tail] = [1, 2, 3, 4];
//console.log(tail);


//如果解构不成功，变量的值就等于undefined。

let [bar, foo] = [1];
//console.log(`bar=${bar};foo=${foo}`);

//不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。
let [x, y] = [1, 2, 3];
//console.log(`x=${x};y=${y}`);

let [m, [n]] = [1, [2, 3], 4];
//console.log(`m=${m};n=${n}`);

//默认值
{
    let [foo = true] = [];
    //console.log(foo);
}

//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

{
    let [x = 1] = [undefined];
    let [y = 1] = [null];
    // console.log(x);
    // console.log(y);  
}

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
{
    let [x = 1, y = x] = []; 
    //let [x = y, y = 1] = [];     // ReferenceError: y is not defined
    // console.log(x,y);
    
}

//对象的解构赋值
{
    let { foo, bar } = { foo: "aaa", bar: "bbb" };
    //console.log(foo,bar);   // aaa bbb
}


//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
{
    let { bar, foo } = { foo: "aaa", bar: "bbb" };
    //console.log(foo,bar);     // aaa bbb
}


{
    let { foo: baz } = { foo: "aaa", bar: "bbb" };
    //foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
    
    let { bar, foo } = { foo: "aaa", bar: "bbb" };
    //实际上是 let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" } 的简写

}

