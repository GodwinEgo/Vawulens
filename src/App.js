import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Plans from './Pages/Plans/Plans'
import Trainers from './Pages/Trainers/Trainers'

const App = () =>
{
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <NotFound />
      <Trainers />
    </BrowserRouter>
  )
}

export default App
