// TODO: ობიექტები

// const obj = {
//     props: "value",
//     method: function(){}
//     method:() => {}
//     method () {}
// }

console.log(`Global -> ${typeof this}`)

const car = {
    brand: "BMW",
    model: "m6",
    year: "2015",
    color: "Black",
    carInfo () {
        // console.log(this)
        // return `BRAND -> ${car.brand}, MODEL -> ${car.model}, YEAR -> ${car.year}`
        return `BRAND -> ${this.brand}, MODEL -> ${this.model}, YEAR -> ${this.year}`
    }
}


const params = "model"

car.country = 'Germany' // TODO: ADD Param in Object

console.log(car['model']) // TODO: Dynamic
console.log(car.brand) // TODO: static

console.log(car.carInfo())

 // TODO: {} []