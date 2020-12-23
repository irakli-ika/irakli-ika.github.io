// let iterator = 0
// let counter = 0
// const interval = setInterval(() => {
//     const randomNumber = Math.floor( Math.random() * 10 )
//     iterator ++
//     if (randomNumber > 5) counter ++ 
//     if (iterator == 10) {
//         clearInterval(interval)
//         if (counter >= 3) console.log('you win')
//         else console.log('game over')
//     }
// }, 1000);

let iterator = 0
let counter = 0
const interval = setInterval(() => {
    const randomNumber = Math.floor( Math.random() * 10 )
    // console.log( randomNumber )
    
    if ( randomNumber > 5 ) {
        counter ++
        console.log( `✔ => ${randomNumber} / STEP =>10 / ${ iterator}` )
    } else {
        console.log(`✗ => ${randomNumber} -> STEP => 10 / ${ iterator}`)
    }

    if (iterator >= 3) {
        if (counter == 3) {
            clearInterval(interval)
            console.log(`you win / 10 -> ${iterator}`)
            return
        }
    }

    if ( iterator == 10 ) {
        clearInterval( interval )
        if ( counter == 3 ) console.log( 'you win' )
        else console.log( 'game over' )
    }
    iterator++
}, 1000);