function calc(number1, number2) {
    return new Promise(resolve => {
        setTimeout(() => {
                const total = number1 * 2 + number2
                
                resolve(total)
            }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printCalc () {
    let result = await calc(7, 5) //19

    result = await calc(11, result) //41
    result = await calc(24, result) //89
    result = await calc(3, result) //95
    result = await calc(91, result) //277

    return result
}

printCalc()