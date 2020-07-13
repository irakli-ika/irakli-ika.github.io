const fruitsRow = document.querySelector('.fruits')
let tryCount = 0
const fruitsArr = [
    {
        img: "mango-icon.png",
        status: "ok"
    },
    {
        img: "orange-icon.png",
        status: "ok"
    },
    {
        img: "pineapple-icon.png",
        status: "ok"
    },
    {
        img: "pomegranate-icon.png",
        status: "ok"
    },
    {
        img: "strawberry-icon.png",
        status: "ok"
    },
    {
        img: "watermelon-icon.png",
        status: "ok"
    },
    {
        img: "Jack-o-lantern-icon.png",
        status: "boom"
    }
]

const randomNumbers = []

while ( randomNumbers.length < fruitsArr.length ) {
    let rn = Math.floor( Math.random() * fruitsArr.length)
    if ( randomNumbers.indexOf(rn) == -1 ) randomNumbers.push( rn )  
}

fruitsRow.innerHTML = randomNumbers.map((item) => {
    return `<div class="col items" data-status="${fruitsArr[item].status}">
                <img src="img/${fruitsArr[item].img}" />
            </div>`
}).join('')



document.querySelectorAll('.items').forEach((item) => {
   item.addEventListener("click", (e) => {


        if ( e.target.getAttribute("data-status") !== "boom" ) {
            e.target.classList.add("show")
            tryCount++
            if (tryCount == (fruitsArr.length - 1)) {
                alert ("YOUR WIN") 
                if (confirm("TRY")) window.location.reload()
            }
        } else {
            alert("GAME OVER")
            if ( confirm( "TRY AGAIN" ) ) window.location.reload()
        }
   })
})



