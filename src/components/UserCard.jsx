import React from 'react'
import { Link } from 'react-router'

const UserCard = ({user}) => {
  return (
    <Link to={`/user/${user.id}`} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition h-[full] w-[30%]">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            
            <div className="text-gray-700 text-sm mt-2">
              
            </div>
            <p className="text-gray-700 text-sm mt-2">
              <span className="font-semibold">Company:</span>{" "}
              {user.company?.name}
            </p>
            
             <button className='mt-5 border p-2 rounded-md'>More Details</button>
          </Link>
  )
}

export default UserCard
