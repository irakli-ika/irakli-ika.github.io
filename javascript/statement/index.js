
const a = 50
const b = 60

// todo: => (true || false)

// if (a < b) {
//  console.log( `${a} < ${b}` )
// }

// if (a < b) {
//    console.log(`${a} < ${b}`)
// } else {
//    console.log(`${a} > ${b}`)
// }

// if (a < b) {
//    console.log(`${a} < ${b}`)
// } else if (a > b) {
//    console.log(`${a} > ${b}`)
// } else {
//    console.log(`${a} = ${b}`)
// }

// if (a < b) console.log(`${a} < ${b}`)
// else if (a > b) console.log(`${a} > ${b}`)
// else console.log(`${a} = ${b}`)

const user_input = 'ok'
let user_data

// if (user_input != '') user_data = user_input
// else user_data = 'default value'

user_data = (user_input != '') ? user_input : 'default value'


console.log((user_input != '') ? user_input : 'default value')

const message = 'A simple primary alert—check it out!'

// const html = '<div class="alert alert-primary" role="alert" onclick="alert(\'message\')">' 
//                    + message +
//                '</div>'

const html = `<div class="alert alert-primary" role="alert" onclick="alert('${message}')">
               ${message}, ${ 10 + 30 }
               </div>`

console.log(html)