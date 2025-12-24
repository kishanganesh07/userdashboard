import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-3">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-md bg-gray-700 text-white font-semibold
                     hover:bg-gray-800 transition-all duration-300 shadow-lg"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default PageNotFound
