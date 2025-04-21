
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

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
