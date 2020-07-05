Array.prototype.str = () => `i'm array proto`

Object.prototype.age = () => `20 years old`

const arr = [1, 2, 3, 'a', 'b', 'c']

console.log(arr)
console.log(arr.str())

const person = {
    name : 'irakli',
    personalInfo() {
        return this.name + ' qiria'
    }
}

const person1 = Object.create(person)

console.log(person)
console.log(person1.personalInfo())
console.log(person1)
console.log(person.personalInfo())
console.log(person.age())