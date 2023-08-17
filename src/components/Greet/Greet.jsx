import React, { useState } from 'react'


const Greet = (props) => {
    const [state, setUseState] = useState("Welcome Bisitor")
    const subBtn = () => {
        setUseState('Thank you for subscribing kulera!')
    }

  return (
    <div>
          {state}
          <button onClick={subBtn}>Subscribe</button>
    </div>
  )
}

export default Greet
