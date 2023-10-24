import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(1)

  const addValue =()=>{
    
    setCount(counter+1);
    //console.log("clicked",+counter);
  }
  const DecValue =()=>{
    
    counter=counter-1;
    setCount(counter);
    //console.log("clicked for Remove",+counter);
  }

  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter value :{counter}</h2>
       <button onClick={addValue}> Add value :{counter}</button><br></br>
       <button onClick={DecValue}>Decrease value :{counter}</button>
    </>
  )
}

export default App
