import React from 'react'

import Dials from './Dials'
import Lever from './Lever'

import classes from './SlotMachine.module.css'

const SlotMachine: React.FC = () => {
  return (
    <div className={classes.slotMachine}>
      <Dials />
      <Lever />
    </div>
  )
}

export default SlotMachine
