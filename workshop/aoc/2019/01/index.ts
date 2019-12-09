import { readFileSync } from 'fs'

type calc = (num:number) => number
type calcTotal = (input:number[], calculate:calc) => number

let rawInput = readFileSync('./_input.txt').toString()
let input = rawInput.split('\n').map(Number)

const calculateCorrectFuelMass:calc = (moduleWeight) => {
  let mass = calculateFuelMass(moduleWeight)
  return mass > 0 ? mass + calculateCorrectFuelMass(mass) : 0
}

const calculateTotalFuelMass:calcTotal = (input, calculate) => {
  return input.reduce((a, b) => a + calculate(b), 0);
}

function calculateFuelMass (moduleWeight:number):number {
  return Math.floor(moduleWeight / 3) - 2
}

console.assert(calculateFuelMass(12) === 2)
console.assert(calculateCorrectFuelMass(1969) === 966)
console.assert(
  calculateTotalFuelMass([12, 14, 1969, 100756], calculateFuelMass) === 2 + 2 + 654 + 33583
)

console.time('result')

console.time('result_1')
let result_1 = calculateTotalFuelMass(input, calculateFuelMass)
console.timeEnd('result_1')
console.time('result_2')
let result_2 = calculateTotalFuelMass(input, calculateCorrectFuelMass)
console.timeEnd('result_2')

console.timeEnd('result')

console.log('solution 1 :', result_1)
console.log('solution 2 :', result_2)
