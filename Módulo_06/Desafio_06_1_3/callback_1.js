function logDouble(number) {
    return console.log(number * 2)
}

function printDouble(number, callback) {
    setTimeout(() => {
            logDouble(number)

            callback()
        }, Math.floor(Math.random() * 100) + 1)
}

printDouble(5, () => {
    printDouble(10, () => {
        printDouble(22, () => {
            printDouble(1, () => {
                printDouble(89, () => {
                })
            })
        })
    })
})