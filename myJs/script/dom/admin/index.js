const main = []

htmlStructure()

document.querySelector('.inner_row').insertAdjacentHTML('beforeend', main.map(e => e).join(''))

function getData(e) {
    e.preventDefault()

    movies = [...movies, {
        id: uuidv4(),
        name: document.querySelector('#inputName').value,
        year: document.querySelector('#inputYear').value,
        director: document.querySelector('#inputDirector').value,
        country: document.querySelector('#inputCountry').value,
        description: document.querySelector('#inputDescription').value,
        genre: document.querySelector('#inputGenre').value
    }]
    submitedStruct()

}

function removeElement(id) {
     movies = movies.filter((e) => e.id != id)
     submitedStruct()
}

// todo: => start edit function

function editData(e) {
    e.preventDefault()

    movies = [...movies, {
        id: uuidv4(),
        name: document.querySelector('#editName').value,
        year: document.querySelector('#editYear').value,
        director: document.querySelector('#editDirector').value,
        country: document.querySelector('#editCountry').value,
        description: document.querySelector('#editDescription').value,
        genre: document.querySelector('#editGenre').value
    }]
    submitedStruct()
}

function editElement(e) {
    // todo: => edit form display
    document.querySelector('.display').style.display = 'block'
    // todo: => end edit form display

    const found = movies.find((item) => item.id === e)

    const itemItem = movies.indexOf(found)
    
    movies.splice(itemItem, 1)
}
