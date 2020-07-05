const num = [1, 7, 4, 25, 100, 3, 12]
let checkNum = []


for (let __i = 0; __i < num.length; __i++) {

    let __randNumber = Math.floor(Math.random() * 10)
    let __someNumber = num.some((item) => item == __randNumber)
    let __someCheckNumber = checkNum.some((e) => e == __randNumber)

    if (__someNumber) {

        if (!__someCheckNumber) checkNum.push(__randNumber) 
        
        console.log(`✔ => ${__randNumber} -> Step ${__i + 1} / 7`)

    } else console.log( `✗ => ${__randNumber} -> Step ${__i + 1} / 7` )

}

console.log( `Common number => ${checkNum}`)