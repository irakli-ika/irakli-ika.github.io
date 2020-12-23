const list_element = document.querySelector('.list')
const pagination_element = document.querySelector('.pagNumber')

const mainItems = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
    "item13",
    "item14",
    "item15",
    "item16",
    "item17",
    "item18",
    "item19",
    "item20",
    "item21",
    "item22"
]

let curent_page = 1 
let rows = 5

function displayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = ""
    page--
    
    const start = rows_per_page * page
    const end = start + rows_per_page
    const pagItems = items.slice(start, end)
    
    for (let i = 0; i < pagItems.length; i++) {
        const item = pagItems[i]

        const item_element = document.createElement('div')
        item_element.innerText = item

        wrapper.appendChild(item_element)
    }
}

function setupPagination (items, wrapper,rows_per_page) {
    wrapper.innerHTML = ""
    
    const page_counter = Math.ceil(items.length / rows_per_page)
    for(let i = 1; i < page_counter + 1; i++) {
        const btn = pagBtn(i, items)
        wrapper.appendChild(btn)
    }

}

function pagBtn(page, items) {
    const button = document.createElement('button')
    button.innerText = page

    button.addEventListener('click', (e) => {
        curent_page = page
        displayList(items, list_element, rows, curent_page)
    })
    return button
}


displayList(mainItems, list_element, rows, curent_page)
setupPagination(mainItems, pagination_element, rows)
