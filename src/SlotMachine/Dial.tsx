import React from 'react'
import { useRecoilValue } from 'recoil'

import { observablePool } from '../recoil-appliation-store'

import classes from './SlotMachine.module.css'

const Dial: React.FC<{ i: number }> = ({ i }) => {
  const sym = useRecoilValue(observablePool.get(i))

  return <div className={classes.dial}>{sym}</div>
}

export default Dial
