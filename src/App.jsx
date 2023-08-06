import { useState } from 'react'
import RegisterFunction from './components/register'
import Dashboard from './components/dashboard'
import { Routes, Route, NavLink } from 'react-router-dom'
import AllPosts from './components/allPosts'
import LogInForm from './components/login'

import './App.css'






function App() {

  const [ token, setToken ] = useState('')

  return (
    <>
    <nav>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/dash'>Profile</NavLink>
      <NavLink to='/login'>Log-in</NavLink>
    </nav>

   
    <Routes>
      <Route path='/login' elements={<LogInForm token={setToken}/>}/>
      <Route path='/dash' element={<Dashboard token={token}/>}/>
      <Route path='/' element={<AllPosts token={token}/>}/>
      <Route path='/signup' element={<RegisterFunction setToken={setToken}/>}/>
    </Routes>
    </>
  )
}

export default App