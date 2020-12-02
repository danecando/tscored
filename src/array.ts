export function forEach<T>(
  array: T[],
  f: (item: T, i: number, array: T[]) => any
): void {
  for (const [i, x] of array.entries()) {
    f(x, i, array)
  }
}

export function filter<T>(
  array: T[],
  f: (item: T, i: number, array: T[]) => boolean
): T[] {
  const filtered = []
  for (const [i, x] of array.entries()) {
    if (f(x, i, array)) {
      filtered.push(x)
    }
  }
  return filtered
}

export function map<T, U>(
  array: T[],
  f: (x: T, i: number, array: T[]) => U
): U[] {
  const mapped = []
  for (const [i, x] of array.entries()) {
    mapped.push(f(x, i, array))
  }
  return mapped
}

export function reduce<T, U>(
  array: T[],
  f: (y: U, x: T, i: number, array: T[]) => U,
  initial: U
): U {
  let reduced = initial
  for (const [i, x] of array.entries()) {
    reduced = f(reduced, x, i, array)
  }
  return reduced
}

export function range(n: number): number[] {
  const array = []
  for (let i = 0; i < n; i++) {
    array[i] = i
  }
  return array
}
