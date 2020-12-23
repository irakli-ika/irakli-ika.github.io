const randNum = Math.floor(Math.random() * (12 - 5))+ 5

const monsterProgress = document.querySelector('.monsterProgress')

const btn = document.querySelector('.btn')

health = 100

btn.addEventListener('click', (e) => {
    health = health - randNum
    monsterProgress.style.width = health + '%'
    console.log(health);

})




