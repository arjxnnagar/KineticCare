import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Login from './components/Login'
import { Routes, Route, useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()
   const isLoginPage = location.pathname === "/login"

  return (
    <div className="App overflow-x-hidden w-screen h-screen relative">
      <div className="absolute z-51 overflow-x-hidden top-[100px] right-[-300px]  h-[700px] w-[700px] rounded-full bg-[#0182DD] opacity-35 blur-[250px]"></div>
      
      {location.pathname !== "/login" && <Navbar />}

          <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>


  )
}

export default App
