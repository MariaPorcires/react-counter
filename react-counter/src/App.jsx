
import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCount] = useState(0)

  function plus() {
    setCount (prevCount => prevCount + 1)
  }

  function minus() {
    setCount (prevCount => prevCount -1)
  }

  return (
    <div className='counter'>

      <button className='counter--minus' onClick={minus}>-</button>
      <section className='counter--count'>
        <h1>{counter}</h1>
      </section>
      <button className='counter--plus' onClick={plus}>+</button>
      
  
    </div>
  )
}

export default App

