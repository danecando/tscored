export function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

export function apply<T extends unknown[], R>(
  f: (...args: T) => R,
  args: T
): R {
  return f(...args)
}

export function bind<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): () => R {
  return () => f(...args)
}

// WIP
// export function throttle<T extends (...args: any) => void>(
//   f: T,
//   threshold: number = 250,
//   scope?: any
// ) {
//   let last: number, deferTimer: NodeJS.Timeout
//   return function(this: any) {
//     const context = scope || this

//     const now = Date.now(),
//       args = arguments
//     if (last && now < last + threshold) {
//       clearTimeout(deferTimer)
//       deferTimer = setTimeout(() => {
//         last = now
//         f.apply(context, args)
//       }, threshold)
//     } else {
//       last = now
//       f.apply(context, args)
//     }
//   } as T
// }
