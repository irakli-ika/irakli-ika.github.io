const mainDiv = document.createElement('div')
const divInner = document.createElement('div')
const body = document.querySelector('body')

divInner.innerHTML = 'hello world'
mainDiv.appendChild(divInner)


body.insertAdjacentElement("afterbegin", mainDiv)
// body.appendChild(mainDiv)

mainDiv.insertAdjacentHTML('beforeend', `<p style = font-size : 20px>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`)
mainDiv.insertAdjacentHTML('beforeend', `<p style = font-size : 20px>Lorem ipsum dolor sit amet.</p>`)

divInner.addEventListener('click', (event) => {
    alert(event.target.innerHTML)
})