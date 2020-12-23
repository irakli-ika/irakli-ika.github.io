
// const onInputEvent = (e) =>{
//     const inputValue = e.target.value
//     console.log(inputValue)
//     document.querySelector(".alert-primary").innerHTML = inputValue
// }

const onBlurEvent = (e) => {
    e.target.style.backgroundColor = "#ffffff"
    const inputValue = e.target.value
    console.log(inputValue)
    document.querySelector(".alert-primary").innerHTML = inputValue
}


const onFocusEvent = (e) => {
    e.target.style.backgroundColor = "#dedede"
}


const onChangeEvent = (e) => {
    const inputValue = e.target.value
    console.log(inputValue)
    document.querySelector(".alert-primary").innerHTML = inputValue
}

const onOff = (e) => {
    if (e.target.checked) document.querySelector(".alert-primary").innerHTML = "ON"
    else document.querySelector(".alert-primary").innerHTML = "OFF"
}

// TODO: Keyboard Events
//? keypress (keydown + keyup)

 

