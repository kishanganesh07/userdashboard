import React from 'react'
import { Context } from '../Context/useContext'
import { useContext } from 'react'
const Home = () => {
    const {user}=useContext(Context)
    console.log(user)
  return (
    <div >
        
      <h1 className=''>UserDashboard {user}</h1>
      
    </div>
  )
}

export default Home
