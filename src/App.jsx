import { useState } from 'react'
import Layouts from './Components/Layouts.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'

function App() {
  
  

  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layouts />} >
      <Route path='/'index element={<Home />} />


    
    
    

    </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
