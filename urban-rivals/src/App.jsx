import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Card from './Component/Card'
import FactionSection from './Component/FactionSection'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Card />
      <FactionSection />
      <Footer />
    </>
  )
}

export default App
