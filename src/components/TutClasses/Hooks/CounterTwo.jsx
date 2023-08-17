import React, { useEffect, useState } from 'react'
import useCounter from './useCounter'

const CounterOne = () => {
   const [count, increment,decrement,reset] = useCounter(10, 10)

  return (
    <div>
        <h3>Count - { count }</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement </button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne
