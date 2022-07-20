import React from 'react'

import { useSpin } from '../useSpin'

import classes from './SlotMachine.module.css'

const Lever: React.FC = () => {
  const spin = useSpin()

  return (
    <div className={classes.lever}>
      <input type="button" onClick={spin} value="Spin" />
    </div>
  )
}

export default Lever
