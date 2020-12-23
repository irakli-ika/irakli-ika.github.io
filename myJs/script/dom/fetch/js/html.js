const mainItem = {
    fetch_col : (e) => {
        return `<div class="col-lg-4 col-md-6 json mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${e.title}</h5>
                                <p class="card-text">${e.body}</p>
                                <button class="btn btn-primary view-more" data-id="${e.id}">Go somewhere</button>
                            </div>
                        </div>
                </div> `

    },
    alert : (e) => {
        return `<div class="alert alert-primary w-100" role="alert">
            Not found!
        </div>`
    }
}