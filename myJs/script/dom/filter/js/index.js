const natural = document.querySelectorAll('.natural')
const animal = document.querySelectorAll('.animal')
const city = document.querySelectorAll('.city')
const naturalBtn = document.querySelector('.naturalBtn')

const filterArr = [
    {name: natural},
    {name: animal},
    {name: city}
]

naturalBtn.addEventListener(('click'), (e) => {
    document.write(filterArr.filter((i)))
})