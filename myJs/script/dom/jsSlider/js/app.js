const slider = document.querySelector('.slider_container')
const sliderImages = document.querySelectorAll('.slider_container img')

// buttons
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

// counter
let counter = 1
const size = sliderImages[0].clientWidth


slider.style.transform = `translateX(${(-size * counter)}px)`

nextBtn.addEventListener('click', ()=> {
    if(counter >= sliderImages.length - 1 ) return
    slider.style.transition = `transform 0.8s ease-in-out`
    counter++
    slider.style.transform = `translateX(${(-size * counter)}px)`
})

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0 ) return
    slider.style.transition = `transform 0.8s ease-in-out`
    counter--
    slider.style.transform = `translateX(${(-size * counter)}px)`
})

slider.addEventListener('transitionend', ()=> {
    if(sliderImages[counter].id === 'lastClone') {
        slider.style.transition = 'none'
        counter = sliderImages.length - 2
        slider.style.transform = `translateX(${(-size * counter)}px)`
    }
    if(sliderImages[counter].id === 'firstClone') {
        slider.style.transition = 'none'
        counter = sliderImages.length - counter
        slider.style.transform = `translateX(${(-size * counter)}px)`
    }
})