const itemsArr = [
    {
        item : '../img/ka-boom-icon.png',
        status : 'boom'
    },
    {
        item : '../img/ka-boom-icon.png',
        status : 'boom'
    },
    {
        item : '../img/ka-boom-icon.png',
        status : 'boom'
    },
    {
        item : '../img/grapes-icon.png',
        status : 'grapes'
    },
    {
        item : '../img/lemon-icon.png',
        status : 'lemon'
    },
    {
        item : '../img/mango-icon.png',
        status : 'mango'
    },
    {
        item : '../img/pear-icon.png',
        status : 'pear'
    },
    {
        item : '../img/pineapple-icon.png',
        status : 'pineapple'
    },
    {
        item : '../img/pomegranate-icon.png',
        status : 'pomegranate'
    },
    {
        item : '../img/watermelon-icon.png',
        status : 'watermelon'
    }
]

let randomNum = []

while (randomNum.length < itemsArr.length) {
    let rn = Math.floor(Math.random() * itemsArr.length)
        if(randomNum.indexOf(rn) == - 1) randomNum.push(rn)
}
console.log(randomNum);
document.querySelector('.addItems').innerHTML = randomNum.map((item) => {
   return  `<div class="col col-md-3 text-center items" data-status="${itemsArr[item].status}">
                <div class="bg-danger mb-2"><img src="img/${itemsArr[item].item}" alt=""></div>
            </div>`
           
}).join('')

// console.log(document.querySelectorAll('.addItems'));
// document.querySelectorAll('.addItems').forEach((item) => {
//     item.innerHTML = randomNum.map((item) => {
//         return  `<div class="bg-danger mb-2"><img src="img/${itemsArr[item].item}" alt=""></div>`
//     }).join('')
// })


document.querySelectorAll('.items').forEach((item) => {
    item.addEventListener("click", (e) => {
 
 
         if ( e.target.getAttribute("data-status") !== "boom" ) {
             e.target.classList.add("show")
             tryCount++
             if (tryCount == (fruitsArr.length - 1)) {
                 alert ("YOUR WIN") 
                 if (confirm("TRY")) window.location.reload()
             }
            // console.log('win')
         } else {
             alert("GAME OVER")
             if ( confirm( "TRY AGAIN" ) ) window.location.reload()
         }
    })
 })
 