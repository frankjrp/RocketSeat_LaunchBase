function printDouble(number) {
    return new Promise(resolve => {
        setTimeout(() => {
                const total = number * 2
                
                resolve(console.log(total))
            }, Math.floor(Math.random() * 100) + 1)
    })
}

printDouble(6)
    .then(() => {
        return printDouble(11)
    })
    .then(() => {
        return printDouble(23)
    })
    .then(() => {
        return printDouble(2)
    })
    .then(() => {
        return printDouble(90)
    })