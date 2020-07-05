// const boxModel = document.querySelectorAll('div')
const boxModel = document.querySelectorAll('.box')
const button = document.querySelector('a')
const wrapper = document.getElementById('wrapper')

// for ( let i = 0; i < boxModel.length; i ++ ) {
//     boxModel[i].addEventListener('click', function(event) {
//         event.stopPropagation()
//         console.log( this.getAttribute('id') )
//     })
// }

// const clickEvent = button.addEventListener('click', (event) => {

//     event.preventDefault()

//     if (boxModel[0].style.display === 'none') boxModel[0].style.display = 'flex'
//     else boxModel[0].style.display = 'none'

//     console.log(boxModel[0].style.display)

//     if (boxModel[0].style.display === 'none') button.innerHTML = 'Open'
//     else button.innerHTML = 'Close'
// })

wrapper.addEventListener('click', (event) => {
    const target = event.target.id
    console.log(target)
})

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (boxModel[0].style.display === 'none') boxModel[0].style.display = 'flex'
    else boxModel[0].style.display = 'none'

    console.log(boxModel[0].style.display)

    if (boxModel[0].style.display === 'none') button.innerHTML = 'Open'
    else button.innerHTML = 'Close'

}) 


// todo => text elements

const section = document.querySelector('section')

section.addEventListener('click', (event) => {
    if (event.target.classList.contains('red')) event.target.style.color = 'red'
    else if (event.target.classList.contains('lightGreen')) event.target.style.color = 'lightgreen'
    else  event.target.style.color = 'blue'
})