import { call, apply, bind, throttle } from './functions'
import { add } from './math'
import { forEach, range } from './array'

describe('call - executes function with supplied arguments', () => {
  test('executes add 2 + 2', () => {
    expect(call(add, 2, 2)).toBe(4)
  })
})

describe('apply - executes function with array of args', () => {
  test('executes add 2 + 2', () => {
    expect(apply(add, [2, 2])).toBe(4)
  })
})

describe('bind - returns a function with parameters bound', () => {
  test('returned a function that executes add 2 + 2', () => {
    const add2plus2 = bind(add, 2, 2)
    expect(add2plus2()).toBe(4)
  })
})

describe('throttle - adds a delay between function calls', () => {
  test('unthrottled should execute more then 4 times in 1 second', () => {
    let calls = 0
    forEach(range(6), () => (calls += 1))
    expect(calls).toBe(6)
  })

  test('should not execute more then 4 times in 1 second', () =>
    new Promise((resolve) => {
      let calls = 0
      const throttedCall = throttle(() => (calls += 1))
      forEach(range(6), throttedCall)
      setTimeout(() => {
        resolve(calls)
      }, 1100)
    }).then((calls) => {
      expect(calls).toBeLessThanOrEqual(4)
    }))
})
