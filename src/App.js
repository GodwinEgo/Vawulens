import React from 'react'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Plans from './Pages/Plans/Plans'
import Trainers from './Pages/Trainers/Trainers'

const App = () =>
{
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Plans />
      <NotFound />
      <Trainers />
    </div>
  )
}

export default App
