
function doSomething(){
   return Promise.reject(new Error('Err'))
}

function onReject(error){
    console.log(error.message)
}

doSomething().catch(()=>{
    console.log('asd')
})

