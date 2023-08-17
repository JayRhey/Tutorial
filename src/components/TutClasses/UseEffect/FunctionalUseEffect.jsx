import React, { useEffect, useState } from 'react'

const FunctionalUseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(() => {
        console.log('useEffect = Updating document title');
        document.title = `You clicked ${count} times`
    },[count])
  return (
      <div>
          <input value={ name } onChange={e => setName(e.target.value)} />
          <button onClick={() => setCount(count + 1)}>Click Me { count }</button>
    </div>
  )
}

export default FunctionalUseEffect
