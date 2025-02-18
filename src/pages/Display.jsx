import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'


function Display() {
  return (
    <div className='d-flex'>
    <Sidebar/>
    <Outlet/>
    
  

    </div>
  )
}

export default Display