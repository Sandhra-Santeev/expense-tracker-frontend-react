

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Display from './pages/Display'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import { useState } from 'react'


function App() {
  const [dataForChart,setDataForChart] = useState([])
 


  return (
    <>
    <Routes>
       <Route path='/' element={<Landing/>}  />
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Register />} />
       <Route path="/display" element={<Display  />}>
          <Route index element={<Expenses setDataForChart={setDataForChart} />} /> {/* Default to Dashboard */}
          <Route path="dashboard" element={<Dashboard dataForChart={dataForChart} />} />
          <Route path="expenses" element={<Expenses setDataForChart={setDataForChart}   />} />
        </Route>
    </Routes>


    

   
        
    </>
  )
}

export default App
