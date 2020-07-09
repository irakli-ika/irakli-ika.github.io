// new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10)
//     if (randomNumber > 5) resolve(`alert-success`)
//     else reject(`alert-warning`)

// })
// .then( (data) => {
//     return  `${data} Add New Conten`
// } )
// .then((data) => {
//     console.log(`second Stap ${data}`)
// })
// .catch((err) => {
//     console.log(err)
// })


// new Promise ((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10)
//     if (randomNumber > 5) resolve ('ok')
// })
// .then ((result) => {
//     throw new Error('Oops!')
// })
// .catch (alert)

new Promise((resolve, reject) => {
    resolve("ok");
})
    .then((result) => {

        throw new Error("Whoops!"); // rejects the promise
    })
    .catch((err) =>{
        console.log(err);
        
    }); // Error: Whoops!
    