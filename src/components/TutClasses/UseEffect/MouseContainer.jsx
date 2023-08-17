import React, { useState } from 'react'
import FunctionalMouseEffect from './FunctionalMouseEffect'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
          <button onClick={() => setDisplay(!display)}>Toggle Display</button>
          {display && <FunctionalMouseEffect></FunctionalMouseEffect> }
    </div>
  )
}

export default MouseContainer
