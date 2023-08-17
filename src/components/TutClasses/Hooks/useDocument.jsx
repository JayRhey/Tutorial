import {useEffect} from 'react'

const useDocument = (count) => {
   useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default useDocument
