const section = document.querySelector('section')

section.addEventListener('click', (event) => {
    if( event.target.classList.contains('red') ) event.target.style.color = 'red'
    else if ( event.target.classList.contains('lightGreen') ) event.target.style.color = 'lightgreen'
    else if ( event.target.classList.contains('blue') ) event.target.style.color = 'blue'
})