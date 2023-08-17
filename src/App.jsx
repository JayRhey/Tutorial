import React,{ useState,useReducer, useEffect } from 'react'
import './App.css'
import UserForm from './components/TutClasses/UserForm/UserForm'



function App() {
 
  // const [count, dispatch] = useReducer(reducer, initialState) 
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    //   <div className='App'>
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <>
        <UserForm />  
    </>
  )
}

export default App
