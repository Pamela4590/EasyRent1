import { useState } from 'react'
import Layouts from './Components/Layouts.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Properties from'./Components/Properties.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import DashboardLayouts from './Dashboard/DashboardLayouts.jsx'
import DashboardView from './Dashboard/DashboardView.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import DashboardHouse from './Dashboard/DashboardHouse.jsx'
import DashboardCustomersTable from './Dashboard/DashboardCustomerTable.jsx'


function App() {
  
  

  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layouts />} >
      <Route path='/'index element={<Home />} />
      <Route path='/Properties' element={<Properties />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      {/* <Route path='/Login' element={<Login />} />
      <Route path='/signup' element={<Register/>}/> */}
      </Route>
      <Route path='/Login' element={<Login />} />
      <Route path='/signup' element={<Register/>}/>
      
      <Route path='/' element={<DashboardLayouts/>} >
      <Route path= "/Dashboard" index element={<DashboardView/>} />
      <Route path= "/Customers" index element={<DashboardCustomersTable/>} />
      
      <Route path= "/houses" index element={<DashboardHouse/>} />
  
    {/* <Route path= "/DashboardOrders" element={<Dashboard/>} /> */}
    {/* <Route path= "/DashboardCustomersTable" element={<DashboardCustomersTable/>} /> */}


    </Route>
    

    
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
