export function add(a: number, b: number): number {
  return a + b
}

export function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
