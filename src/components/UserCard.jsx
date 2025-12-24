import React from 'react'
import { Link } from 'react-router'

const UserCard = ({user}) => {
  return (
    <Link to={`/user/${user.id}`} className="bg-white rounded-lg shadow-md p-5
                 transition-all duration-300 ease-in-out
                 hover:shadow-xl hover:scale-[1.02]
                 h-[full] w-full sm:w-[48%] lg:w-[30%]">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
        {user.name}
      </h2>

            <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
          />
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
          />
        </svg>
        <span className="font-semibold">{user.email}</span> 
      </p>
            <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27.98L8.91 10.91a12.04 12.04 0 005.17 5.17l1.9-1.55a1 1 0 01.98-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z"
          />
        </svg>
        <span className="font-semibold">{user.phone}</span> 
      </p>
            
            <div className="text-gray-700 text-sm mt-2">
              
            </div>
            <p className="text-gray-700 text-sm sm:text-base mt-2">
        <span className="font-semibold">🏢</span>{" "}
        {user.company?.name}
      </p>
            
             <button className='mt-4 sm:mt-5 border px-3 py-1.5 rounded-md text-sm sm:text-base'>More Details</button>
          </Link>
  )
}

export default UserCard
