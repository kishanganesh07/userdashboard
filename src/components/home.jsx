import React from 'react'
import { Context } from '../Context/useContext'


import Detailscard from './detailscard'
const Home = () => {
   
  return (
    <div className='bg-gray-200 w-full min-h-screen '>
        <header className=''>
          <div className='p-10 text-center'>
                <h1 className="text-xl lg:text-2xl font-bold text-balance mb-2">User Dashboard</h1>
                <p className="text-sm text-muted-foreground">View user information</p>
              </div>

        </header>
      <Detailscard/>
      
    </div>
  )
}

export default Home
