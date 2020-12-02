import { add, sum } from './math'

describe('add - Adds two numbers', () => {
  test('2 + 2 = 4', () => {
    expect(add(2, 2)).toBe(4)
  })
})

describe('sum - Computes the sum of the values in array', () => {
  test('[4, 4, 4] = 12', () => {
    expect(sum([4, 4, 4])).toBe(12)
  })
})
