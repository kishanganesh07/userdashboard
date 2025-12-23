import React from 'react'
import { Context } from '../Context/useContext'
import { useContext } from 'react'

import Detailscard from './detailscard'
const Home = () => {
    const {user}=useContext(Context)
    
    console.log(user)
   
  return (
    <div className='bg-gray-200 w-full min-h-screen '>
        <header className=''>
          <div className='p-10 text-center'>
                <h1 className="text-xl lg:text-2xl font-bold text-balance">User Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage and view user information</p>
              </div>

        </header>
       
      
      <Detailscard/>
      
    </div>
  )
}

export default Home
