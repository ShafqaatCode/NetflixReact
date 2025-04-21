
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
// import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TvShows from './Pages/TvShows'
import Movies from './Pages/Movies'



function App() {

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in");
        
        if (window.location.pathname === '/login') {
          navigate('/');
        }
      } else {
        console.log("Logged out");
        if (window.location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tvshows' element = {<TvShows />} />
        <Route path='/movies' element = {<Movies />} />
      </Routes>

    </>
  )
}

export default App 
