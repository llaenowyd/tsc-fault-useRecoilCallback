import alphabet from './alphabet'

export const getRandomSymbol = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)]

export const range = (n: number): number[] =>
  new Array(n).fill(undefined).map((val, index) => index)
