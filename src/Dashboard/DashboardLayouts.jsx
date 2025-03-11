import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar.jsx'
import DashboardNavbar from './DashboardNavbar.jsx'


function DashboardLayout(){
return(
    <>
    <Sidebar />
    <Outlet />
    <DashboardNavbar />
    
    </>
)}
export default DashboardLayout   
