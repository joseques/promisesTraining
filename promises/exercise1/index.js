function later(delay) {
    return new Promise ((resolve) => {
        setTimeout(resolve,delay);
    })
};

later(300) .then(() => {
    console.log('TIMED OUT!')
});
