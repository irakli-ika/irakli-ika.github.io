// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data));
    
//     // .then(response =>  console.log(response))

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>  {
        document.querySelector('.fetch-row').innerHTML = data.map((item) => {
            return `<div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.body}</p>
                                <a href="#${item.id}" class="btn btn-primary click" data-func='click'>Go somewhere</a>
                            </div>
                        </div>
                    </div> `
        }).join('')
        
        data.map((item) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
                .then(response => response.json())
                .then(data => {
                    document.querySelector('.click').addEventListener('click', (e) => {

                        document.querySelector('.modalContainer').classList.add('modalBox')
                        document.querySelector('.modalContainer').classList.remove('modalBoxRm')
                    })
                    
                })
            })
        document.querySelector('.modal-fetch-row').innerHTML = data.map((item) => {
            return `<div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.body}</p>
                                <a href="https://jsonplaceholder.typicode.com/posts/${item.id}" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`
        }).join('')
    })
    