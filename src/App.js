import React from 'react'
import Bodydown from './components/Bodydown'
import Bodyup from './components/Bodyup'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Bodyup/>
      <Bodydown />
      <Footer />
    </div>
  )
}

export default App