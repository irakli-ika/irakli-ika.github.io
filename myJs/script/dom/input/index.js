const txtContainer = document.querySelector('.txtContainer')
const opacityOutput = document.getElementById('opacityOutput')
const sizeOutput = document.getElementById('sizeOutput')
const enterText = document.querySelector('.enterTxt')
const enterLabel = document.querySelector('.enterLabel')
const clearLabel = document.querySelector('.clearLabel')
const resetLabel = document.querySelector('.resetLabel')

const onChangeTxt = (e) => {
    const text = e.target.value

    if (text) {
        enterLabel.addEventListener('click', (e) => {
            txtContainer.innerHTML = text
        })
    }
}

const clearClick = clearLabel.addEventListener ('click', (e) => {
    txtContainer.innerHTML = ''
    enterText.value = ''
})

const onChangeOpacity = (e) => {
    const opacityChange = e.target.value
    txtContainer.style.opacity = opacityChange
    opacityOutput.innerHTML = opacityChange
}

const onChangeSize = (e) => {
    const sizeChange = e.target.value
    txtContainer.style.fontSize = sizeChange + 'px'
    sizeOutput.innerHTML = sizeChange + 'px'
}

const onBoldControl = (e) => {
    const boldChange = e.target.checked
    if (boldChange) txtContainer.style.fontWeight = 600
    else txtContainer.style.fontWeight = 100
}

const onItalicControl = (e) => {
    const italicControl = e.target.checked
    if (italicControl) txtContainer.style.fontStyle = 'italic'
    else txtContainer.style.fontStyle = 'normal'
}

const onUnderlineControl = (e) => {
    const underlineControl = e.target.checked
    if (underlineControl) txtContainer.style.textDecoration = 'underline'
    else txtContainer.style.textDecoration = 'none'
}

const onColorRed = (e) => {
    const colorRed = e.target.checked
    if (colorRed) txtContainer.style.color = 'red'
}
const onColorGreen = (e) => {
    const colorGreen = e.target.checked
    if (colorGreen) txtContainer.style.color = 'green'
}
const onColorBlue = (e) => {
    const colorBlue = e.target.checked
    if (colorBlue) txtContainer.style.color = 'Blue'
}
