import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import About1 from './Components/About1/About1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About1/>
    </>
  )
}

export default App
