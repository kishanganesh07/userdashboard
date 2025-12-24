import React, { useContext, useState } from 'react'
import { Context } from '../Context/useContext'
import CreateUserModal from './CreateUserModal'
import UserCard from './UserCard'
const Detailscard = () => {
    const { users, setOpenModal } = useContext(Context)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
   
    return(
 <div>
     <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <div className="relative w-full sm:max-w-md sm:ml-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 border border-white text-white w-full bg-white/20 rounded-md py-2 pr-4 outline-none"
          />
        </div>
        <button className='border p-2 rounded-md w-full sm:w-auto
             bg-gray-700 text-white
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:scale-[1.02]
             active:scale-95  mr-15' onClick={() => setOpenModal(true)}>Create User  +</button>
      </div>

      <CreateUserModal />

      <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 lg:px-30 mt-4 pb-10">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user}/>       
         
        ))}
      </div>
    </div>
    )
   
  
}

export default Detailscard
