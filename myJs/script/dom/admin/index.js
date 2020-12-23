const main = []

const submitForm = document.querySelector('.submitForm')
const editForm = document.querySelector('.editForm')
htmlStructure()

// start add button function

document.querySelector('.clickAdd').addEventListener('click', (e) => {
    submitForm.style.display = `block`
    editForm.style.display = 'none'
})

document.querySelector('.inner_row').insertAdjacentHTML('beforeend', main.map(e => e).join(''))

// start submit function
function getData(e) {
    e.preventDefault()

    const inputName = document.querySelector('#inputName').value
    const inputYear = document.querySelector('#inputYear').value
    const inputDirector = document.querySelector('#inputDirector').value
    const inputCountry = document.querySelector('#inputCountry').value
    const inputDescription = document.querySelector('#inputDescription').value
    const inputGenre = document.querySelector('#inputGenre').value
    
    // checkes input value
    if(!((inputName || inputYear || inputDirector || inputCountry || inputDescription || inputGenre) == false)) {
        movies = [...movies, {
            id: uuidv4(),
            name: inputName,
            year: inputYear,
            director: inputDirector,
            country: inputCountry,
            description: inputDescription,
            genre: inputGenre
        }]
        submitedStruct()
        // submit form reset
        submitForm.reset()
        // end submit form reset

        // submit form display none
        submitForm.style.display = `none`
        // end submit form display
    }
    else (alert('Please fill in the field'))
    
}

// start remove function
function removeElement(id) {
     movies = movies.filter((e) => e.id != id)
     submitedStruct()

     // submit form display none
     submitForm.style.display = `none`
     // end submit form display

     // edit form display
     editForm.style.display = 'none'
     // end edit form display
}

// start edit function
function editElement(e) {
    
    // edit form display
    editForm.style.display = 'block'
    // end edit form display

    // submit form display none
    submitForm.style.display = `none`
    // end submit form display

    const found = movies.find((item) => item.id === e)

    const itemItem = movies.indexOf(found)
    
    movies.splice(itemItem, 1)
}

function editData(e) {
    e.preventDefault()

    const editName = document.querySelector('#editName').value
    const editYear = document.querySelector('#editYear').value
    const editDirector = document.querySelector('#editDirector').value
    const editCountry = document.querySelector('#editCountry').value
    const editDescription = document.querySelector('#editDescription').value
    const editGenre = document.querySelector('#editGenre').value

    if(!((editName || editYear || editDirector || editCountry || editDescription || editGenre) == false)) {
        movies = [...movies, {
            id: uuidv4(),
            name: editName,
            year: editYear,
            director: editDirector,
            country: editCountry,
            description: editDescription,
            genre: editGenre
        }]
        submitedStruct()
        // edit form reset
        editForm.reset()
        // end edit form reset

        // edit form display
        editForm.style.display = 'none'
        // end edit form display
    }
    else (alert('Please fill in the field'))
    
}