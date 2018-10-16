
function doSomething(){
    return new Promise((resolve,reject) =>{
        resolve('PROMISE VALUE');
       
    })
};

doSomething().then(console.log);
console.log('MAIN PROGRAM');

