
import Home from './components/home'
import Userdetailspage from './components/userdetailspage'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Home/>
      }/>
      <Route path='/user/:id' element={
        <Userdetailspage/>
      }/>
    </Routes>
    </BrowserRouter>

     
     
    </>
  )
}

export default App
