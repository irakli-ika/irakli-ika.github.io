let itaretor = 0

const interval = setInterval(() => {
    const randomNum = Math.floor( Math.random() * 10)
    itaretor ++
    if(itaretor == 10) clearInterval(interval)
    if ( randomNum > 5) {
        const timer = setTimeout(() => {
            console.log(randomNum)
        }, 5000);
    }
}, 3000);