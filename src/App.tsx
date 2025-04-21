import { useState } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
     
    </>
  )
}

export default App
