import "@fortawesome/fontawesome-free/css/all.min.css"
import Home from './components/home'
import Userdetailspage from './components/userdetailspage'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router'
import Userslist from './components/Userslist'
import { ToastContainer } from 'react-toastify'
import PageNotFound from "./components/PageNotFound"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Home/>
      }/>
      <Route path='/users' element={
        <Userslist/>
      }/>
      <Route path='/user/:id' element={
        <Userdetailspage/>
      }/>
      <Route path='*' element={
        <PageNotFound/>
      }/>
    </Routes>
    </BrowserRouter>
       <ToastContainer position="top-right" autoClose={2000} />    
     
    </>
  )
}

export default App
