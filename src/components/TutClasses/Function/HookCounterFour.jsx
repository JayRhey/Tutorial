import React, { useState } from 'react'

const HookCounterFour = () => {
    const [items, setItems] = useState([])

    const addNumber = (e) => {
        e.preventDefault()
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1
        }])
    }
  return (
      <div>
          <button onClick={addNumber}>Add a number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{ item.value }</li>    
            ))}      
        </ul>
    </div>
  )
}

export default HookCounterFour
