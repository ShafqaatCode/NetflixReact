
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
// import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logged in")
        navigate('/')
      }
      else{
        console.log("Logged out")
        navigate('/login')
      }
    })
  })

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App
