import React, { useContext } from 'react'
import { Context } from '../Context/useContext'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Personaldetails from './Personaldetails'
import Companydetails from './Companydetails'
import Addressdetails from './Addressdetails'
import Navbar from './navbar'
import Footer from './footer'

const Userdetailspage = () => {
  const { id } = useParams()
  const { users } = useContext(Context)

  const user = users.find((use) => use.id == id)

  if (!user) {
    return <div className="p-6">Loading user...</div>
  }

  const personal = {
    name: user.name,
    email: user.email,
    phone: user.phone
  }

  const company = {
    name: user.company.name,
    catchPhrase: user.company.catchPhrase,
    bs: user.company.bs
  }

  const address = {
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
    zipcode: user.address.zipcode,
    lat: user.address.geo.lat,
    lng: user.address.geo.lng
  }

  return (
    <div className="bg-gray-200 w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="pb-5 px-4 sm:px-6 lg:px-10">
        <Link to="/users">
          <button className="mt-6 sm:m-10 border rounded-md px-4 py-2 w-full sm:w-auto bg-gray-700 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-[1.02] active:scale-95">
            ← Back to Dashboard
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-5 px-4 sm:px-6 lg:px-12">
        <Personaldetails personal={personal} />
        <div className="flex flex-col md:flex-row gap-10">
          <Companydetails deatils={company} />
          <Addressdetails deatils={address} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Userdetailspage
