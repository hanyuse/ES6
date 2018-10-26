// console.log(...[1, 2, 3])

var arr = [11,22,33];
arr.push(...[1,2,3]);
// console.log(arr);


let arr1 = [1,3,5,55,3,22,4,4,1];
let max = Math.max(...arr1);
// console.log(max); //55


//复制数组
{
    let arr = [1,2];
    let arr1 = arr;
    //arr和arr1指向同一个引用，修改arr1会改变arr的值
    arr1[2] = 3;
    // console.log(arr,arr1);
    {
        let arr = [1,2];
        let arr1 = [...arr];
        // console.log(arr1);
        
        arr1[2] = 3;
        // console.log(arr,arr1);
        
    }
}


//合并数组
{
    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];

    let arr = [...arr1,...arr2,...arr3];
    // console.log(arr);
}

//与解构赋值结合
{
    let arr = [1,2,3,4,5];
    let [a,...rest] = arr;
    // console.log(a,rest);
}


//Array.from()

{
    function fun(){
        let arr = Array.from(arguments);
        console.log(Object.prototype.toString.call(arguments));//[object Arguments]
        console.log(arr);
        console.log(Object.prototype.toString.call(arr));//[object Array]
        console.log(Array.isArray(arguments)); //false
        console.log(Array.isArray(arr));    //true
    }
    //fun(1,2,3);


}


{
    let arr = Array.from([1, 2, 3], (x) => x * x);
   // console.log(arr);

    let divs = document.querySelectorAll("div");
    let arr1 = Array.from(divs,div=>div.innerHTML);
   // console.log(arr1);
}

//Array.prototype.includes()
{

[1,2,3].includes(2); // true
[1,2,3].includes(4);   // false
[1,2,NaN].includes(NaN); // true

}

//flat()
{

//    console.log([1, 2, [3, 4]].flat());
   // [1, 2, 3, 4]
     
    // console.log([1, 2, [3, [4, 5]]].flat(2));
    //[1, 2, 3, 4, 5]
    
    // console.log([1, [2, [3]]].flat(Infinity));
    //[1, 2, 3]

}

//flatMap()
{
    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
    [2, 3, 4].flatMap((x) => [x, x * 2])
    // [2, 4, 3, 6, 4, 8]
}

//ES5 补充
{
    let arr = [3,5,6,78,9,2];
    //console.log(arr.every(item=>item>0));
    let arr1 = [3,5,6,78,9,2,-1];    
    //console.log(arr1.some(item=>item<0));
    
    let arr2 = [3,5,6,78,9,2,-1];
    var newArr = arr2.filter(item=>item>5);
    console.log(newArr); //[6, 78, 9]
    

    let arr3 = [3,5,6,78,9,2];
    arr3.forEach(item=>{
        console.log(item);
    })

    let array = [1,2,3,4];
    let newArray = array.map(item=>item*2);
    console.log(newArray);
    














}
