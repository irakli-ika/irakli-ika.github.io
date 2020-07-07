const buttons = document.querySelectorAll('.filterBar')
const sections = document.querySelectorAll('.img')

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        // buttons.forEach(item => {
        //     item.className = ''
        // })
        // item.className = 'active'
        buttons.forEach(item => item.classList.remove('active'))
        item.classList.add('active')

        let values = item.textContent
        console.log(values);
        
        sections.forEach(show => {
            show.style.display = 'none'
            console.log(show);
            
            if (show.getAttribute('data-id') === values || values === 'all') {
                show.style.display = 'block'
            }
        })
    })
})