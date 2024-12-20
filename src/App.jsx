import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import About1 from './Components/About1/About1'
import Menu from './Components/Menu/Menu'
import Why from './Components/Why/Why'
import Banner from './Components/Banner/Banner'
import Feedback from './Components/Feedback/Feedback'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About1/>
      <Menu/>
      <Why/>
      <Banner/>
      <Feedback/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
