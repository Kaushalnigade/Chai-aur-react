import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  const [message, setMessage] = useState("")

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1)
    setMessage("")    
  }

  const subValue = () =>{
    if(counter > 0) {
      setCounter(counter - 1)
      setMessage("")
    }
    else {
      setMessage("Counter cannot go below 0 !! ")      
    }
  }

  return (
    <>
      <h1>Chai Aur React !! </h1>
      <h2>Counter value {counter} </h2>

      <button
      onClick={addValue}> 
      Add Button </button>
      <br />

      <button
      onClick={subValue}> 
      Remove Button </button >

      <p> {message}</p>
    </>
  )
}

export default App
