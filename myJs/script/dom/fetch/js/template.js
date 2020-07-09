const promiseA = new Promise((resolve, reject) => {

    const randomNumber = Math.floor(Math.random() * 10)

    if (randomNumber > 5) resolve(`OK -> ${randomNumber}`)
    else reject(`Err -> ${randomNumber}`)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10)
    setTimeout(() => {

    })

}, 0)


new Promise((resolve, reject) => {

})
    .then()
    .catch()
