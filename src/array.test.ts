import { filter, map, forEach, reduce, range } from './array'

describe('filter - returns items that predicate returns truthy for', () => {
  test('returns even numbers from array', () => {
    expect(filter([1, 2, 3, 4, 5, 6], (i) => i % 2 === 0)).toStrictEqual([
      2,
      4,
      6,
    ])
  })
})

describe('map - returns a new array of values from applied function', () => {
  test('returns new array with number values multiplied by 2', () => {
    expect(map([1, 2, 3], (x) => x * 2)).toStrictEqual([2, 4, 6])
  })
})

describe('forEach - executes provided function for each value passed in', () => {
  test('iteration counter matches array length', () => {
    let i = 0
    forEach([1, 2, 3, 4, 5], (x) => (i = x))
    expect(i).toBe(5)
  })
})

describe('reduce - creates a new value by applying function to each element in array', () => {
  test('computes the sum of numbers in array', () => {
    expect(reduce([1, 2, 3, 4, 5], (a: number, x: number) => a + x, 0)).toBe(15)
  })
})

describe('range - creates an array of n length with values initialized to i', () => {
  test('creates an array of length 5, value should === index', () => {
    const x = range(5)
    expect(x.length).toBe(5)
    expect(x[0]).toBe(0)
    expect(x[4]).toBe(4)
  })
})
