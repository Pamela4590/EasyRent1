import { useState } from 'react'
import Layouts from './Components/Layouts.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Properties from'./Components/Properties.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
function App() {
  
  

  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layouts />} >
      <Route path='/'index element={<Home />} />
      <Route path='/Properties' element={<Properties />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    
    
    

    </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
