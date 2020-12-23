// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data));
    
//     // .then(response =>  console.log(response))


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>  {
        document.querySelector('.fetch-row').innerHTML = data.map((item) => {
            return mainItem.fetch_col(item)
        }).join('')

        document.querySelectorAll('.view-more').forEach((e) => {
            e.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id')
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(res => res.json())
                    .then((item) => {
                        document.querySelector('.card-title--view').innerHTML = item.title
                        document.querySelector('.card-text--view').innerHTML = item.body
                        document.getElementById('open-view').click()
                    })
            })
        })
    });


document.getElementById('search').addEventListener('keyup', (e) => {
    const search = e.target.value
    const row = document.querySelector('.fetch-row')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            
            const filtred = data.filter((item) => item.title.includes(search))
            row.innerHTML = (filtred.length > 0) ? filtred.map((item) => {
                return mainItem.fetch_col(item)
            }).join('') : mainItem.alert(e)

            document.querySelectorAll('.view-more').forEach((e) => {
                e.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id')
                    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                        .then(res => res.json())
                        .then((item) => {
                            document.querySelector('.card-title--view').innerHTML = item.title
                            document.querySelector('.card-text--view').innerHTML = item.body
                            document.getElementById('open-view').click()
                        })
                })
            })
        });
})
