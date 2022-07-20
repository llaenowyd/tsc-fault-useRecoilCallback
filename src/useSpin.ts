import { useCallback } from 'react'
import { useRecoilCallback, useRecoilValue } from 'recoil'

import { observablePool } from './recoil-appliation-store'
import { getRandomSymbol } from './util'

const useSetDial = () =>
  useRecoilCallback(({ set }) => (i: number, nextSymbol: string) => {
    set(observablePool.instance(i), nextSymbol)
  })

export const useSpin = () => {
  const setDial = useSetDial()
  const size = useRecoilValue(observablePool.size)

  const spin = useCallback(() => {
    for (let i = 0; i < size; i++) {
      setDial(i, getRandomSymbol())
    }
  }, [setDial, size])

  return spin
}
