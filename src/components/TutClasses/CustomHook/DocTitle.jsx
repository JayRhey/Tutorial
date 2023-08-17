import React, { useEffect, useState } from 'react'
import useDocument from '../Hooks/useDocument'

const DocTitle = () => {
    const [count, setCount] = useState(0)

    useDocument(count)
  return (
    <div>
          <button onClick={() => setCount(count + 1)}>Count { count }</button>
    </div>
  )
}

export default DocTitle
