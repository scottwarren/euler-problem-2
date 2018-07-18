const FibonacciSequence = require('./fibonacciSequence')

// We are going to sum the [even] numbers in the Fibonacci sequence until we hit this number
const ADDITION_MAX = 4000000

const getSumOfEvenFibonacci = () => {
    let index = 0
    let runningTotal = 0

    while(getFibonacciByN(index) < ADDITION_MAX) {
        // Only add the current term to the running total if the current term is even
        if (getFibonacciByN(index) % 2 === 0) {
            runningTotal += getFibonacciByN(index)
        }

        index++
    }

    return runningTotal
}

getFibonacciByN = n => {
    if (FibonacciSequence.length <= n) {
        // Out of range (TODO: throw an error?)
        throw new Error(`"${n}" is out of range of known Fibonacci numbers`)
    }

    return FibonacciSequence[n]
}

module.exports = {
    getSumOfEvenFibonacci,
    getFibonacciByN,
}