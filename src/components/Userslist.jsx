import React from 'react'
import Detailscard from './detailscard'
import Footer from './footer'
import Navbar from './navbar'
const Userslist = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col'>
       <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar/>
        <header className='px-4 sm:px-6 lg:px-10'>
          <div className='mt-6 sm:mt-10 mb-4 sm:mb-8 rounded-xl shadow-sm px-6 py-8 sm:py-10 text-center'>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">User Dashboard</h1>
                <p className="grow px-2 sm:px-4 lg:px-6 text-gray-300">View user information</p>
              </div>

        </header>
      <div className="grow">
       <Detailscard/>
      </div>
      <Footer/>
      </div>
    
     
    </div>
  )
}

export default Userslist
