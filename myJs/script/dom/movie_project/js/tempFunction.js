// function pushInCols() {

//     return movies.forEach(element => {

//         cols.push(`<div class="main_col col-md-3 bg-secondary m-2 pt-2 rounded-lg">
//                         <div class="content text-center">
//                             <a href="page.html#${element.id}" class="text-decoration-none">
//                                 <div class="movi_name">
//                                     <h5 class="item">${element.name}</h5>
//                                 </div>
//                                 <div class="movie_img">
//                                     <img src="img/${element.image}" alt="">
//                                 </div>
//                                 <div class="more text-right">
//                                     <p>სრულად</p>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>`)
//     })

// }
//? end pushInCols function

function pushInRow(){

    return movies.forEach(element => {

        row.push(`<div class="row mx-auto page_row view" id="${element.id}">
                        <div class="col-md-9 mx-auto bg-secondary p-3 rounded-lg">
                            <div class="row col_row">
                                <div class="col-md-4 img">
                                    <img src="img/${element.image}" alt="">
                                </div>
                                <div class="col info">
                                    <h4 class="header">${element.name}</h5>
                                    <p class="year">წელი: ${element.year}</p>
                                    <p class="director">რეჟისორი: ${element.director}</p>
                                    <p class="country">ქვეყანა: ${element.country}</p>
                                    <p class="desc">${element.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>`)                   
    })
}
//? end pushInRow function