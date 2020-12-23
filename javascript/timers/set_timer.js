// TODO: => https://www.w3schools.com/jsref/met_win_settimeout.asp

//? setTimeout 

//* ასინქრონული მოქმედებები

console.log("Start")

const timer = setTimeout( () => {
    
    console.log(`🔥`)

}, 10000)

console.log( Math.floor( Math.random() * 10) )

const randonNumber = Math.floor( Math.random()  * 10 )

if ( randonNumber < 5 ) clearTimeout(timer)

console.log("end")

//? setInterval

const interval = setInterval(() => {
    
    console.log("Every 3s")
    if ( Math.floor( Math.random() * 10 ) < 5 ) clearInterval(interval)

}, 3000); 


