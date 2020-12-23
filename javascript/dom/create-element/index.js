// TODO: => https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const newContent = document.createTextNode("Hi there and greetings!");

div1.innerHTML = 'hello'
div2.innerHTML = 'welcome'

div1.classList.add('Created-Element', 'NEW-Element')

div1.addEventListener("click", (e) => {
    alert(e.target.innerHTML)
})



const parrentElement = document.querySelector('.container')


// parrentElement.appendChild(div)

parrentElement.insertAdjacentElement('beforeend', div1)
parrentElement.insertAdjacentElement('beforeend', div2)

parrentElement.insertAdjacentHTML('afterend', `<div>hello2</div>`)