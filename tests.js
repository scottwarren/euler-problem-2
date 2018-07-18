const assert = require('assert')

const { getSumOfEvenFibonacci, getFibonacciByN } = require('./')

// Determined by manually adding all even numbers in the Fibonacci sequence that do not exceed 4,000,000
const SUM_EVEN_FIBONACCI = 4613732

describe('Fibonacci even number addition under 4,000,000', function() {
    it('should get the total sum of even fibonacci terms that are below four million [4,000,000]', function() {
        assert.equal(getSumOfEvenFibonacci(), SUM_EVEN_FIBONACCI)
    })
})

describe('Fibonacci by index', function() {
    it('should get the correct fibonacci number by index', function() {
        assert.equal(getFibonacciByN(0), 0)
        assert.equal(getFibonacciByN(26), 121393)
    })
    
    it('should throw an exception when passing an index of Fibonacci numbers that we haven\'t defined', function() {
        assert.throws(() => getFibonacciByN(1000), Error, '"1000" is out of range of known Fibonacci numbers')
    })
})