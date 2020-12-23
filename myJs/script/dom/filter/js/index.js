const buttons = document.querySelectorAll('.filterBar')
const sections = document.querySelectorAll('.img')

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        buttons.forEach(item => item.classList.remove('active'))
        item.classList.add('active')

        let values = item.textContent
        
        sections.forEach(show => {
            show.style.display = 'none'
            if (show.getAttribute('data-id') === values || values === 'all') {
                show.style.display = 'block'
            }
        })
        // sections.forEach(show => {    

        //     if (show.getAttribute('data-id') === values) {
        //         show.style.transform = 'scale(1.5, 1.5)'
                
        //     }
        // })
    })
})