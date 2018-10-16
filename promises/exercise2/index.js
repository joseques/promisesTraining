let doSomething = ()  => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve('FULFILLED!')
        },300)
    })
}

doSomething().then(console.log)