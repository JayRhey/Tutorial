import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
         intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

   

  return (
    <div>
          Count - {timer}
          <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
    </div>
  )
}

export default HookTimer
