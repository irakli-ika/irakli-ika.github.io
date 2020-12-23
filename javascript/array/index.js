const array1 = [5, 12, 8, 44, 130];


// const isLargeNumber = (element) => element > 13;

const isLargeNumber = (element) =>  { 

        return ( element > 10 && element % 10  == 0 )

    };

console.log(array1.findIndex(isLargeNumber));


// TODO:  array Methods -> reduce

let sum = [3, 1, 2, 3].reduce(function (accumulator, currentValue) {
    
    return accumulator + currentValue
}, 0) // 0 Default value for accumulator

// [3, 1, 2, 3].reduce(agr1, arg2)

console.log(sum)

// const arr = [];
const msg = new String("Message");

const arrFromStr = "message".split('');

console.log(arrFromStr)

console.log(Array.from('foo', i => `<${i}>`));
// expected output: Array ["f", "o", "o"]

// Array.from(agr1, artg2)

// console.log(Array.from([1, 2, 3], x => x * x));

console.log(Array.from([1, 2, 3]));
// expected output: Array [2, 4, 6]



// const arrMix = Array.of( true, "ok", 25, {}, [] ); 

// const arrMix = new Array (true, "ok", 25, {}, []); 

// const arrMix = [ true, "ok", 25, {}, [] ]
// Array.of(1, 2, 3); // [1, 2, 3]


// TODO> => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// TODO> => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// TODO> => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

console.log(array.filter(isPrime));   // [53, 2, 5, 7, 31, 97, 17]