import React from 'react'
import { useRecoilValue } from 'recoil'

import { observablePool } from '../recoil-appliation-store'
import { range } from '../util'

import Dial from './Dial'

import classes from './SlotMachine.module.css'

const Dials: React.FC = () => {
  const size = useRecoilValue(observablePool.size)

  return (
    <div className={classes.dials}>
      {range(size).map(i => (
        <Dial key={i} i={i} />
      ))}
    </div>
  )
}

export default Dials
