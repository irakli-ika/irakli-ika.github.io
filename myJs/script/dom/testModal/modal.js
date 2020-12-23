function modalStructure() {
    return movies.forEach(element => {
        modal.push(`<div class="myModal" tabindex="-1" role="dialog" data-modalId= "${element.id}" id="${element.id}">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title">${element.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class = "closeModal">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                            <p>${element.description}</p>
                            </div>
                        </div>
                        </div>
                    </div>`)
    })
}
