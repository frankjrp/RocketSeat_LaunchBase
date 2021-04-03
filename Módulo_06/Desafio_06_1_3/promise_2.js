function printDouble(number1, number2) {
    return new Promise(resolve => {
        setTimeout(() => {
            const total = number1 * 2 + number2

            resolve(total)
        }, Math.floor(Math.random() * 100) + 1)
    })
}

printDouble(6, 5) //17
    .then((total) => {
        return printDouble(11, total) //39
    })
    .then((total) => {
        return printDouble(23, total) //85
    })
    .then((total) => {
        return printDouble(2, total) //89
    })
    .then((total) => {
        return printDouble(90, total) //269
    })