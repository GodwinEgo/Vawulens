import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/gallery' element={ <Gallery /> } />
        <Route path='/plans' element={ <Plans /> } />
        <Route path='/not-found' element={ <NotFound /> } />
        <Route path='/trainers' element={ <Trainers /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
