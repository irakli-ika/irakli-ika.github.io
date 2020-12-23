// todo: => https://www.w3schools.com/js/js_array_methods.asp
// todo: => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// todo: => https://www.geeksforgeeks.org/javascript-basic-array-methods/
const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]

// todo; => მასივის ინდექსაცია იწყება 0 დან 
//console.log(months[ months.length - 1 ])

//? for(  სოჩიკის ინიციალიზაცია; პირობა; მოქმედება ციკლის 1 იტერაციის გავლის მერე ) {
    //? მოქმედება სანამ პირობა სრულდება (true)
//? }

// for(let i = 0;  i <= 10; i ++){
//     console.log(i)
// } 


// for(let i = 0;  i <= 10; i ++){
   
//     if (i == 5) break
//     console.log(i) 

// } 

// for(let i = 0;  i <= 10; i ++){

//     if (i == 5) continue
//     console.log(i) 

// }

// for (let i = 0; i < months.length; i ++) {
//     console.log(months[i])
// }

// for ( i in months) {
//     if (months[i] == "January" || months[i] == "December") continue
//     console.log(months[i])
// }

const arr = []
arr[2] = "March"
arr[5] = "June"


for (i of arr) {
    console.log(i)
}



