function submitedStruct() {
    return (document.querySelector('.inner_row').innerHTML = movies.map(element =>
        `<div class="main_col col-md-3 bg-secondary m-2 pt-2 rounded-lg">
                <div class="col info">
                    <h4 class="header">${element.name}</h4>
                    <p class="year">წელი: ${element.year}</p>
                    <p class="director">რეჟისორი: ${element.director}</p>
                    <p class="country">ქვეყანა: ${element.country}</p>
                    <p class="desc">${element.description}</p>
                </div>
                <div class="row">
                    <div class="edit btn btn-info mx-3" data-name="edit"  id="${element.id}" onclick="editElement('${element.id}')">Edit</div>
                    <div class="remove btn btn-danger" data-name="remove" id="${element.id}" onclick="removeElement('${element.id}')">Remove</div>
                </div>
            </div>`).join(''))
}