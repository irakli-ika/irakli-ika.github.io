function mainStructure(){

    return movies.forEach(element => {
 
        col.push(`<div class="col checkId">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="img/${element.image}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5> 
                        <a href="#${element.name}" class="btn btn-primary" data-id="${element.id}" id="${element.id}">სრულად</a>
                        </div>
                    </div>
                </div>`)
                                
    })

}