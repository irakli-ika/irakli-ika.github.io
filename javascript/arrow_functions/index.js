
// TODO: function declaration
// TODO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

console.log(_sum(10, 15))

function _sum(a, b) {
    return a * b
}

// TODO function expression
// TODO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

// console.log(sum_(10,15))

const sum_ = function (a, b) {
    return a * b
}

// const n1 = 10
// const n2 = 20

// console.log(_sum(10, 20))
// console.log(sum_(10, 30))

// const arrowSum = (a, b) => {
//     return a * b
// }

const arrowSum = (a, b) => a * b

// const arrowSqrt = (n) => n * n
const arrowSqrt = n => n * n

console.log(arrowSum(10, 20))
console.log(arrowSqrt(10))


