function makeDouble(number) {
    return new Promise(resolve => {
        setTimeout(() => {
                const total = number * 2
                
                resolve(console.log(total))
            }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printDouble () {
    let result = await makeDouble(7)

    result = await makeDouble(12)
    result = await makeDouble(24)
    result = await makeDouble(3)
    result = await makeDouble(91)

    return result
}

printDouble()