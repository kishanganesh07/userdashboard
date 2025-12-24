import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Context/useContext"
import CreateUserModal from "./CreateUserModal"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { users, setOpenModal } = useContext(Context)

  return (
    <nav className="bg-white shadow w-full">
      <div className=" px-4 sm:px-6 lg:pl-40 lg:pr-50 py-3 flex justify-between items-center">
        <Link to="/">
        <h1 className="text-lg sm:text-xl font-bold text-gray-800">
          UserApp
        </h1>
        </Link>
        <div className="hidden md:flex flex-1 gap-6 justify-end items-center">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
           <Link to="/users" className="text-gray-600">
            Users
          </Link>
           <button className='border  rounded-md px-4 py-1 w-full sm:w-auto
             bg-gray-700 text-white
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 
             active:scale-95' onClick={() => setOpenModal(true)}>Create User  +</button>
             <CreateUserModal/>
        </div>
        <button
          className="md:hidden text-gray-600 text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 flex flex-col gap-2">
          <Link to="/" className="text-gray-600">
            Home
          </Link>
          <Link to="/users" className="text-gray-600">
            Users
          </Link>
           
          
        </div>
      )}
    </nav>
  )
}

export default Navbar
