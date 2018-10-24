let promise = new Promise(function(resolve,reject){
    console.log(1);
    if(true){
        resolve("success");
    }



}).then(function(result){
    console.log(result)
})

