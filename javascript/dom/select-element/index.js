// TODO: => https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// TODO: Return Object {}
const element = document.querySelector('.list-group-item')
element.style.backgroundColor = "#333"
element.style.color = "#fefefe"

// TODO: => Working With Attributes
console.log (element.getAttribute('class') )
element.setAttribute("id", "selectedItem")
// element.setAttribute('class', 'selectedItem')

// TODO: => Working With Inner Content
element.innerHTML = `<span style="color:#c30000;">New Contant For Item</span>`
element.innerHTML += `<span style="color:#c30000;">New Contant For Item</span>`


//element.classList.add('selectedItem')
//console.log(element)


console.log( document.querySelector("#header").innerHTML )
// console.log( document.querySelector("#header").textContent )
// console.log( document.querySelector("#header").innerText )

const header = document.getElementById('header')


console.log( document.getElementById('header') )
console.log( document.getElementsByClassName('list-group-item') )


// TODO: Return Object  [ {}, {}, {} ]
const elements = [... document.querySelectorAll('.list-group-item') ]


 
console.log(elements)


