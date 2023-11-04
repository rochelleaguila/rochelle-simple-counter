//useState, useEffect, setInterval, props
import { useEffect, useState } from 'react'
import SimpleCounter from "./SimpleCounter"


function App() {
  const [counter, setCounter] = useState(0);
  
  useEffect()
  
  return (
    <>
      <SimpleCounter /> 
    </>
  )
}

export default App
