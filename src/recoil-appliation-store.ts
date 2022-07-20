import { atom, atomFamily, selector, selectorFamily } from 'recoil'

type IdType = number
type ValueType = string

const size = atom<number>({
  key: 'size',
  default: 7,
})

const instance = atomFamily<ValueType, IdType>({
  key: 'instance',
  default: '⭐',
})

const get = selectorFamily<ValueType, IdType>({
  key: 'get',
  get:
    i =>
    ({ get }) =>
      get(instance(i)),
})

export const observablePool = {
  instance,
  get,
  size,
}
