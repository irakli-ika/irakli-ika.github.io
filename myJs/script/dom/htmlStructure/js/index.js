let fieldCount = 0

const template = `<div class="col position-relative">
                        <div class="form-group">
                            <input type="file" class="form-control-file" />
                            <button type="button" class="btn btn-warning btn-minus" data-id="${Date.now()}">
                                <i class="fas fa-minus fa-lg"></i>
                            </button>
                        </div>
                    </div>`


const inpFile = document.getElementById('inpFile')
const btnMinus = document.querySelector('.btn-minus')   
const btnPlus = document.getElementById('btnPlus')



inpFile.addEventListener('change', function (){
    const file = this.files[0]
    const innerImg = document.querySelector('.inner-row').insertAdjacentHTML('afterbegin', `<img src="" alt="" class="preview" id="${Date.now()}"> `)
    fieldCount ++
    if (file) {
        btnPlus.addEventListener('click', () => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function () {
                let result = reader.result
                let img = document.querySelector('.preview')
                img.setAttribute('src', result)
            }
        })
    }
    
    if (Date.now()) {
        btnMinus.addEventListener(('click'), () => {

        })
    }
    
})