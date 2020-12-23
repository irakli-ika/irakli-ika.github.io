let a = 10
let b = 20
let c = a

let car = {
    brand: "BMW",
    model: "m6",
    year: "2015",
    color: "Black"
}

let arr = ["a", "b", "c"]
let arr1 = arr
let arr2 = [...arr]

arr1.push('K')
arr2.push("d")

console.log(arr)

let car1 = car
let car2 = {...car}

car1.location = "Europa"
car2.country = 'germany'

console.log(car)

console.log(c)
a = 30
console.log(c)