let resolvedPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({'message':'resolved promise!'});
    }, 500)
})
resolvedPromise.then(function(resolve){
    console.log(resolve)
}, function(error){
    console.log(error)
})

let rejectedPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject({'error':'rejected promise!'});
    }, 500)
})

rejectedPromise.catch(function(resolve){
    console.log(resolve)
}, function(error){
    console.log(error)
})
