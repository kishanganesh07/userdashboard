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
     <div className="container mx-auto px-4 py-6 flex justify-between items-center mb-4">
        <div className="relative max-w-md ml-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 border w-full rounded-md py-2 mr-5 pr-15"
          />
        </div>
        <button className='border p-2 rounded-md' onClick={() => setOpenModal(true)}>Create User  +</button>
      </div>

      <CreateUserModal />

      <div className="flex flex-wrap px-30 justify-center gap-4 mt-4 pb-15">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user}/>       
         
        ))}
      </div>
    </div>
    )
   
  
}

export default Detailscard
