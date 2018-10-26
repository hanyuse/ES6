
function func(a=0,b=0){
    console.log(a,b);
}

// func(1,3); //1 3
// func(2);   //2 0


//使用默认值是不能有同名参数
/* function foo(x, x, y = 1) {
    // ...
} */

//与解构赋值结合使用

function foo({x, y = 5}) {
    console.log(x, y);
}
  
// foo({}) // undefined 5
// foo({x: 1}) // 1 5
// foo({x: 1, y: 2}) // 1 2

function fetch(url, {
    body = '',
    method = 'GET',
    headers = {}
}) {
    console.log(method);
}

fetch('http://example.com', {})
// "GET"

//fetch('http://example.com')
// 报错


function m1({x = 0, y = 0} = {}) {
    return [x, y];
}
  
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

m1();
m2();
m1({x: 3});
m2({x: 3});


//剩余参数
function test(...rest){
    console.log(rest)
}
// test(1,2,3,4,5);



//箭头函数

{
    let f = p=>p+1;
    //console.log(f(1));
    
    let arr = [1,2,3,4,5,6];
    let newArr = arr.map(item=>item*2);
    //console.log(newArr);

    let obj = {
        fun:function(){
            setTimeout(function(){
                console.log(this);
            })
        },
        arrow:function(){
            setTimeout(_=>{
                console.log(this);
            })
        }
    }

    obj.fun();//window
    obj.arrow();//obj
    


}

