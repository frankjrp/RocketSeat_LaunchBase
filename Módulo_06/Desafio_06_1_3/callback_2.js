function calcValues(number1, number2) {
    return number1 * 2 + number2
}

function printDouble(number1, number2, callback) {
    setTimeout(() => {
            const total = calcValues(number1, number2)

            callback(total)
        }, Math.floor(Math.random() * 100) + 1)
}

printDouble(5, 0, (total) => { //10
    printDouble(10, total, (total) => { //30
        printDouble(22, total, (total) => { //74
            printDouble(1, total, (total) => { //76
                printDouble(89, total, () => { //254
                })
            })
        })
    })
})